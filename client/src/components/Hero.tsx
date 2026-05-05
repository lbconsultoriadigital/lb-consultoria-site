export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `url(/manus-storage/lb-hero-bg_61106fef.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-line w-12"></div>
            <span className="section-number">LB CONSULTORIA DE CARREIRA</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-charcoal mb-8">
            Clareza, estratégia e posicionamento para a sua próxima etapa profissional.
          </h1>

          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl mb-12 font-light">
            A LB Consultoria de Carreira ajuda profissionais a reorganizarem sua trajetória, currículo, LinkedIn e comunicação profissional com método, critério e direção.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-charcoal text-offwhite text-sm font-medium tracking-wider hover:bg-charcoal/90 transition-colors"
            >
              Solicitar análise inicial
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-charcoal/20 text-charcoal text-sm font-medium tracking-wider hover:border-charcoal/50 transition-colors"
            >
              Entender como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
