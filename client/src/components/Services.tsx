export default function Services() {
  const services = [
    "Currículo ATS editável.",
    "Otimização de LinkedIn.",
    "Adaptação de currículo para vaga.",
    "Diagnóstico de posicionamento profissional.",
    "Relatório consultivo de carreira.",
    "Perguntas estratégicas para aprofundar histórico, resultados e diferenciais.",
  ];

  return (
    <section id="servicos" className="min-h-screen flex items-center py-24 md:py-32 fade-section">
      <div className="container w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="section-number">03</span>
          <div className="gold-line w-8"></div>
          <span className="text-xs font-medium tracking-[0.2em] text-charcoal/50 uppercase">Serviços</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium leading-tight text-charcoal mb-16 max-w-2xl">
          Entregas objetivas para cada necessidade.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 border-l-[3px] border-gold/40 bg-offwhite hover:bg-secondary transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="gold-dot mt-2 shrink-0"></span>
                <p className="text-base text-charcoal/80 leading-relaxed">{service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
