"use client";

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { contact } from './site-data';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contactos" className="bg-zinc-900 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Contactos</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Fale connosco</h2>
          <div className="mt-6 space-y-4 text-zinc-300">
            <p><span className="font-semibold text-white">WhatsApp:</span> {contact.whatsapp}</p>
            <p><span className="font-semibold text-white">Pastor Responsável:</span> {contact.pastor}</p>
            <p><span className="font-semibold text-white">YouTube:</span> <Link href={contact.youtube} target="_blank" className="text-amber-300 underline underline-offset-4">Canal Casa de Oração</Link></p>
            <p><span className="font-semibold text-white">Facebook:</span> <Link href={contact.facebook} target="_blank" className="text-amber-300 underline underline-offset-4">Página oficial no Facebook</Link></p>
            <p><span className="font-semibold text-white">Localização:</span> {contact.addressLabel}</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-3xl bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-bold">Pedido de contacto</h3>
            <input type="text" placeholder="Seu nome" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-zinc-300" required />
            <input type="email" placeholder="Seu email" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-zinc-300" required />
            <textarea placeholder="Escreva a sua mensagem" rows={5} className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-zinc-300" required />
            <button type="submit" className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]">Enviar mensagem</button>
            {submitted && <p className="text-sm text-amber-200">Mensagem registada nesta versão de demonstração. Pode ligar este formulário a EmailJS, Formspree ou a uma API Next.js.</p>}
          </form>
        </div>
        <div className="rounded-3xl bg-white p-3 shadow-2xl">
          <iframe title="Localização Casa de Oração" src={contact.mapUrl} className="h-[320px] w-full rounded-2xl border-0 md:h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}
