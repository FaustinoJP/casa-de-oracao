export default function AboutSection() {
  return (
    <section id="quem-somos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Quem Somos</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Missão, visão e valores</h2>
        <p className="mt-4 text-zinc-600">Esta secção apresenta a identidade da Casa de Oração, comunicando com clareza o propósito espiritual, a direcção ministerial e os princípios que orientam a comunidade.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-amber-50 p-8 shadow-sm ring-1 ring-amber-100"><h3 className="text-xl font-bold text-zinc-900">Missão</h3><p className="mt-4 leading-7 text-zinc-600">Levar vidas à presença de Deus por meio da oração, ensino da Palavra, comunhão e serviço.</p></div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200"><h3 className="text-xl font-bold text-zinc-900">Visão</h3><p className="mt-4 leading-7 text-zinc-600">Ser uma igreja relevante, cheia do Espírito Santo, impactando famílias, jovens e a sociedade.</p></div>
        <div className="rounded-3xl bg-zinc-900 p-8 text-white shadow-sm"><h3 className="text-xl font-bold">Valores</h3><p className="mt-4 leading-7 text-zinc-300">Fé, santidade, amor, integridade, serviço, excelência, unidade e compromisso com Cristo.</p></div>
      </div>
    </section>
  );
}
