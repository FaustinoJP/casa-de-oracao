import { agenda } from './site-data';

export default function AgendaSection() {
  return (
    <section id="agenda" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Agenda da Igreja</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Cronograma das actividades</h2>
      </div>
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
        <div className="grid bg-zinc-900 px-6 py-4 text-sm font-semibold text-white md:grid-cols-3"><div>Dia</div><div>Hora</div><div>Actividade</div></div>
        {agenda.map((item, index) => (
          <div key={`${item.dia}-${item.hora}-${index}`} className="grid border-t border-zinc-100 px-6 py-4 text-sm text-zinc-700 md:grid-cols-3"><div className="font-medium">{item.dia}</div><div>{item.hora}</div><div>{item.actividade}</div></div>
        ))}
      </div>
    </section>
  );
}
