import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-zinc-100" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">Bem-vindos à Casa de Oração</span>
          <h1 className="text-4xl font-black leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">Um espaço reservado para fortalecer a presença digital da igreja</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">Uma plataforma elegante, responsiva e preparada para apresentar a missão da igreja, divulgar actividades, testemunhos, agenda, eventos, disponibilidade pastoral e muito mais.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#quem-somos" className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5">Conhecer a Igreja</a>
            <a href="#agenda" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-amber-500 hover:text-amber-600">Ver Agenda</a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-zinc-900 text-white shadow-2xl sm:col-span-2">
            <div className="relative h-72 w-full">
              <Image src="/images/pastor-pedro.jpg" alt="Pastor Pedro Guimarães" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Pastor Responsável</p>
              <h3 className="mt-3 text-2xl font-bold">Pedro Antonio Guimarães</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-200">Apresentação em destaque do pastor responsável da Casa de Oração, com espaço para mensagem pastoral, pregador da semana e temas especiais.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Agenda</p>
            <h3 className="mt-3 text-2xl font-bold">Actividades Organizadas</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">Cronograma visível e actualizado para membros, visitantes e liderança.</p>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Presença Digital</p>
            <h3 className="mt-3 text-2xl font-bold">YouTube, Facebook e contacto rápido</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">Integração com canal oficial, redes sociais, WhatsApp e outros meios de comunicação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
