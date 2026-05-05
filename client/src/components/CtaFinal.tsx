import { useState } from "react";

export default function CtaFinal() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      id="contato"
      className="relative min-h-screen flex items-center py-24 md:py-32 fade-section"
      style={{
        backgroundColor: "#EFEAE0",
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: "#C9A961" }}></div>
            <span className="inline-block w-2 h-2" style={{ backgroundColor: "#C9A961" }}></span>
            <div className="w-12 h-px" style={{ backgroundColor: "#C9A961" }}></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6" style={{ color: "#0E0E10" }}>
            Quer entender se sua carreira está sendo comunicada com a força que merece?
          </h2>

          <p className="text-lg leading-relaxed font-light mb-10" style={{ color: "#5C5C62" }}>
            Envie seu material para uma avaliação inicial e receba uma leitura clara sobre os principais pontos de ajuste no seu currículo, LinkedIn e posicionamento.
          </p>

          <a
            href="mailto:felipe@lbconsultoriadigital.com?subject=Solicita%C3%A7%C3%A3o%20de%20an%C3%A1lise%20inicial%20de%20carreira"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wider transition-colors"
            style={{
              backgroundColor: isHovering ? "#A88843" : "#C9A961",
              color: "#F5F1EA",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Falar com a LB Consultoria
          </a>
        </div>
      </div>
    </section>
  );
}
