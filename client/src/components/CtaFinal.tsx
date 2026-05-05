export default function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative min-h-screen flex items-center py-24 md:py-32 fade-section"
      style={{
        backgroundImage: `url(/manus-storage/lb-cta-bg_db99cd8f.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-line w-12"></div>
            <span className="gold-dot"></span>
            <div className="gold-line w-12"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight text-foreground mb-6">
            Quer entender se sua carreira está sendo comunicada com a força que merece?
          </h2>

          <p className="text-lg text-foreground/70 leading-relaxed font-light mb-10">
            Envie seu material para uma avaliação inicial e receba uma leitura clara sobre os principais pontos de ajuste no seu currículo, LinkedIn e posicionamento.
          </p>

          <a
            href="mailto:felipe@lbconsultoriadigital.com?subject=Solicita%C3%A7%C3%A3o%20de%20an%C3%A1lise%20inicial%20de%20carreira"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-foreground text-sm font-semibold tracking-wider hover:bg-gold-light transition-colors"
          >
            Falar com a LB Consultoria
          </a>
        </div>
      </div>
    </section>
  );
}
