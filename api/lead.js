const LEAD_SOURCE = "landing-checklist-7-segundos";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

function isLocalRequest(req) {
  const host = req.headers.host || "";
  return host === "localhost" || host === "127.0.0.1" || host === "::1" || host.startsWith("localhost:");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = getBody(req);
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!name || !isValidEmail(email)) {
    return res.status(400).json({ error: "Nome e e-mail válidos são obrigatórios." });
  }

  const payload = {
    name,
    email,
    source: LEAD_SOURCE,
    createdAt: typeof body.createdAt === "string" ? body.createdAt : new Date().toISOString(),
    pageUrl: typeof body.pageUrl === "string" ? body.pageUrl : req.headers.referer || "",
    userAgent: typeof body.userAgent === "string" ? body.userAgent : req.headers["user-agent"] || "",
  };

  if (!process.env.LEADS_WEBHOOK_URL) {
    if (process.env.NODE_ENV !== "production" || isLocalRequest(req)) {
      return res.status(200).json({ ok: true, localMode: true });
    }
    return res.status(503).json({ error: "LEADS_WEBHOOK_URL não configurada." });
  }

  try {
    const response = await fetch(process.env.LEADS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Falha ao enviar lead para o webhook." });
    }

    return res.status(200).json({ ok: true, localMode: false });
  } catch {
    return res.status(502).json({ error: "Falha ao enviar lead para o webhook." });
  }
}
