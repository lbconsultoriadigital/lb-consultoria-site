import { describe, expect, it } from "vitest";
import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { resolve } from "path";

const projectRoot = resolve(__dirname, "..");
const indexPath = resolve(projectRoot, "client/index.html");
const publicDir = resolve(projectRoot, "client/public");
const whatsappUrl =
  "https://wa.me/5511921801361?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20LB%20Consultoria%20de%20Carreira.%20Quero%20entender%20como%20melhorar%20meu%20curr%C3%ADculo%20e%20LinkedIn.";
const oldDomain = ["lbconsultoria", "com", "br"].join(".");
const oldEmail = ["contato", oldDomain].join("@");
const localUserPath = ["/Users", "felipeleone"].join("/");

describe("Official LB landing publication", () => {
  it("publishes the refined static landing as the Vite entry", async () => {
    const content = await readFile(indexPath, "utf-8");

    expect(content).toContain("LB Consultoria de Carreira | Currículo e LinkedIn que o mercado lê");
    expect(content).toContain("https://www.lbconsultoriadigital.com/logos/og-image.png");
    expect(content).toContain('href="https://www.lbconsultoriadigital.com" rel="canonical"');
    expect(content).toContain("logos/horizontal-clean.png");
    expect(content).toContain("logos/horizontal-negative-clean.png");
    expect(content).toContain("downloads/checklist-7-segundos.pdf");
  });

  it("uses official contact data and removes old/local publication data", async () => {
    const content = await readFile(indexPath, "utf-8");

    expect(content).toContain("contato@lbconsultoriadigital.com");
    expect(content).toContain("+55 11 92180-1361");
    expect(content).toContain("www.lbconsultoriadigital.com");
    expect(content).toContain(whatsappUrl);
    expect(content).not.toContain(oldEmail);
    expect(content).not.toContain(oldDomain);
    expect(content).not.toContain(localUserPath);
  });

  it("keeps the checklist behind a real lead capture flow", async () => {
    const content = await readFile(indexPath, "utf-8");

    expect(content).toContain('id="lead-form"');
    expect(content).toContain('name="name"');
    expect(content).toContain('name="email"');
    expect(content).toContain("landing-checklist-7-segundos");
    expect(content).toContain("createdAt");
    expect(content).toContain("pageUrl");
    expect(content).toContain("userAgent");
    expect(content).toContain("fetch(leadEndpoint");
    expect(content).toContain("/api/lead");
  });

  it("includes deploy assets required by the public build", () => {
    expect(existsSync(resolve(publicDir, "logos/og-image.png"))).toBe(true);
    expect(existsSync(resolve(publicDir, "logos/favicon.ico"))).toBe(true);
    expect(existsSync(resolve(publicDir, "logos/horizontal-clean.png"))).toBe(true);
    expect(existsSync(resolve(publicDir, "logos/horizontal-negative-clean.png"))).toBe(true);
    expect(existsSync(resolve(publicDir, "downloads/checklist-7-segundos.pdf"))).toBe(true);
    expect(existsSync(resolve(projectRoot, "README_PUBLICAR.md"))).toBe(true);
  });
});
