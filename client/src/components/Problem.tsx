export default function Problem() {
  return (
    <section
      id="problema"
      className="min-h-screen flex items-center py-24 md:py-32 fade-section"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto lg:mx-0 lg:ml-[16%]">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-number">01</span>
            <div className="gold-line w-8"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-tight text-charcoal mb-8">
            Sua trajetória pode estar melhor do que a forma como ela é comunicada.
          </h2>

          <p className="text-lg text-charcoal/65 leading-relaxed font-light">
            Muitos profissionais têm experiência, conquistas e potencial, mas chegam ao mercado com um currículo genérico, LinkedIn desalinhado e uma narrativa que não traduz sua real senioridade.
          </p>
        </div>
      </div>
    </section>
  );
}
