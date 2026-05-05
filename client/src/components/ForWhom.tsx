export default function ForWhom() {
  const profiles = [
    "Profissionais em recolocação.",
    "Pessoas em transição de carreira.",
    "Especialistas que querem comunicar melhor sua experiência.",
    "Lideranças e executivos em reposicionamento.",
    "Profissionais com currículo ou LinkedIn desatualizados.",
    "Candidatos que precisam adaptar o material para oportunidades específicas.",
  ];

  return (
    <section id="para-quem" className="min-h-screen flex items-center py-24 md:py-32 fade-section">
      <div className="container w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="section-number">04</span>
          <div className="gold-line w-8"></div>
          <span className="text-xs font-medium tracking-[0.2em] text-charcoal/50 uppercase">Para quem é</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium leading-tight text-charcoal mb-16 max-w-2xl">
          Para profissionais que sabem o que fizeram, mas precisam comunicar melhor.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 border-b border-border/40 bg-secondary/30"
            >
              <span className="gold-dot mt-2 shrink-0"></span>
              <p className="text-base text-charcoal/75 leading-relaxed">{profile}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
