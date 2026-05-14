import type { Express, Request, Response } from "express";

const LEAD_SOURCE = "landing-checklist-7-segundos";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  source?: unknown;
  createdAt?: unknown;
  pageUrl?: unknown;
  userAgent?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeLead(body: LeadPayload, req: Request) {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!name || !isValidEmail(email)) {
    return null;
  }

  return {
    name,
    email,
    source: LEAD_SOURCE,
    createdAt: typeof body.createdAt === "string" ? body.createdAt : new Date().toISOString(),
    pageUrl: typeof body.pageUrl === "string" ? body.pageUrl : req.get("referer") || "",
    userAgent: typeof body.userAgent === "string" ? body.userAgent : req.get("user-agent") || "",
  };
}

function isLocalRequest(req: Request) {
  const host = req.hostname || req.get("host") || "";
  return host === "localhost" || host === "127.0.0.1" || host === "::1" || host.startsWith("localhost:");
}

async function forwardLead(payload: NonNullable<ReturnType<typeof normalizeLead>>, req: Request) {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    const localMode = process.env.NODE_ENV !== "production" || isLocalRequest(req);
    return { ok: localMode, localMode };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return { ok: response.ok, status: response.status, localMode: false };
}

export function registerLeadRoute(app: Express) {
  app.all("/api/lead", async (req: Request, res: Response) => {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const payload = normalizeLead((req.body || {}) as LeadPayload, req);
    if (!payload) {
      return res.status(400).json({ error: "Nome e e-mail válidos são obrigatórios." });
    }

    try {
      const result = await forwardLead(payload, req);
      if (!result.ok) {
        const status = result.localMode ? 200 : result.status || 502;
        const error = result.localMode ? undefined : "Falha ao enviar lead para o webhook.";
        return res.status(status).json({ ok: result.localMode, localMode: result.localMode, error });
      }

      return res.status(200).json({ ok: true, localMode: result.localMode });
    } catch {
      return res.status(502).json({ error: "Falha ao enviar lead para o webhook." });
    }
  });
}
