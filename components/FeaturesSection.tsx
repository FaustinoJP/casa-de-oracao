import { actividades } from './site-data';

export default function FeaturesSection() {
  return (
    <section id="actividades" className="bg-amber-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">Recursos do Website</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">O que o website pode apresentar</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {actividades.map((item) => (
            <div key={item} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100"><p className="text-base font-semibold text-zinc-800">{item}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
