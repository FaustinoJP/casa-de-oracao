import { pastoral } from './site-data';

export default function PastoralSection() {
  return (
    <section id="pastoral" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Disponibilidade Pastoral</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Atendimento e acompanhamento</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {pastoral.map((item) => (
          <div key={item.nome} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"><h3 className="text-xl font-bold text-zinc-900">{item.nome}</h3><p className="mt-3 text-zinc-600">{item.horario}</p></div>
        ))}
      </div>
    </section>
  );
}
