export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Análise do currículo, LinkedIn, objetivo profissional e materiais enviados.",
    },
    {
      number: "02",
      title: "Direção",
      description: "Definição de posicionamento, lacunas, palavras-chave e narrativa profissional.",
    },
    {
      number: "03",
      title: "Construção",
      description: "Otimização do currículo ATS, LinkedIn e materiais de apoio, conforme a necessidade.",
    },
    {
      number: "04",
      title: "Revisão",
      description: "Validação final de clareza, coerência, consistência e aderência ao objetivo.",
    },
  ];

  return (
    <section id="como-funciona" className="min-h-screen flex items-center py-24 md:py-32 fade-section">
      <div className="container w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="section-number">02</span>
          <div className="gold-line w-8"></div>
          <span className="text-xs font-medium tracking-[0.2em] text-charcoal/50 uppercase">Como funciona</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium leading-tight text-charcoal mb-16 max-w-2xl">
          Um processo com método, clareza e direção.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-serif text-3xl text-gold/60 font-light">{step.number}</span>
              </div>
              <div className="border-t border-gold/30 pt-5 bg-secondary/30 p-5 -mx-0">
                <h3 className="font-serif text-xl font-medium text-charcoal mb-3">{step.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
