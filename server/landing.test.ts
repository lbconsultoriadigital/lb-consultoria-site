import { describe, expect, it } from "vitest";
import { existsSync } from "fs";
import { resolve } from "path";

const componentsDir = resolve(__dirname, "../client/src/components");
const pagesDir = resolve(__dirname, "../client/src/pages");

describe("Landing page components exist", () => {
  const requiredComponents = [
    "Header.tsx",
    "Hero.tsx",
    "Problem.tsx",
    "HowItWorks.tsx",
    "Services.tsx",
    "ForWhom.tsx",
    "Differentiator.tsx",
    "CtaFinal.tsx",
    "Footer.tsx",
  ];

  requiredComponents.forEach((component) => {
    it(`${component} exists`, () => {
      expect(existsSync(resolve(componentsDir, component))).toBe(true);
    });
  });

  it("Home.tsx page exists", () => {
    expect(existsSync(resolve(pagesDir, "Home.tsx"))).toBe(true);
  });
});

describe("Landing page content integrity", () => {
  it("CtaFinal uses correct email (not WhatsApp placeholder)", async () => {
    const fs = await import("fs/promises");
    const content = await fs.readFile(resolve(componentsDir, "CtaFinal.tsx"), "utf-8");
    expect(content).not.toContain("wa.me/5511999999999");
    expect(content).toContain("felipe@lbconsultoriadigital.com");
  });

  it("Header uses valid manus-storage logo path", async () => {
    const fs = await import("fs/promises");
    const content = await fs.readFile(resolve(componentsDir, "Header.tsx"), "utf-8");
    expect(content).toContain("/manus-storage/lb_monograma_isolado_d927c814.png");
  });

  it("Footer uses valid manus-storage logo path", async () => {
    const fs = await import("fs/promises");
    const content = await fs.readFile(resolve(componentsDir, "Footer.tsx"), "utf-8");
    expect(content).toContain("/manus-storage/lb_logo_horizontal_5730f244.png");
  });

  it("Hero uses manus-storage background (not cloudfront)", async () => {
    const fs = await import("fs/promises");
    const content = await fs.readFile(resolve(componentsDir, "Hero.tsx"), "utf-8");
    expect(content).not.toContain("cloudfront.net");
    expect(content).toContain("/manus-storage/lb-hero-bg_61106fef.webp");
  });
});
