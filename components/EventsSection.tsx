"use client";

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testemunhos } from './site-data';

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testemunhos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = testemunhos[currentIndex];

  return (
    <section id="eventos" className="bg-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Carrossel Principal</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Testemunhos e publicações de eventos</h2>
          <p className="mt-4 text-zinc-300">Rotação automática com imagens reais da igreja.</p>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
          <div className="relative h-[340px] w-full sm:h-[460px]">
            <Image src={currentSlide.imagem} alt={currentSlide.titulo} fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <h3 className="text-2xl font-black sm:text-3xl">{currentSlide.titulo}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-200 sm:text-base">{currentSlide.descricao}</p>
          </div>
          <button type="button" onClick={() => setCurrentIndex((prev) => (prev === 0 ? testemunhos.length - 1 : prev - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white/25" aria-label="Slide anterior"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={() => setCurrentIndex((prev) => (prev + 1) % testemunhos.length)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white/25" aria-label="Próximo slide"><ChevronRight className="h-5 w-5" /></button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          {testemunhos.map((item, index) => (
            <button key={item.titulo} type="button" onClick={() => setCurrentIndex(index)} className={currentIndex === index ? 'h-3 w-10 rounded-full bg-amber-400 transition-all' : 'h-3 w-3 rounded-full bg-white/30 transition-all'} aria-label={`Ir para o slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
