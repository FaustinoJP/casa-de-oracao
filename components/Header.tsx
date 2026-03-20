"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { menu } from './site-data';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-amber-400 bg-white shadow-sm">
            <Image src="/images/logo-casa-oracao.png" alt="Logótipo Casa de Oração" fill className="object-cover" sizes="56px" priority />
          </div>
          <div>
            <p className="text-lg font-bold tracking-wide text-amber-600">CASA DE ORAÇÃO</p>
            <p className="text-xs text-zinc-500">Tabernáculo de fé, adoração, intercessão e comunhão</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {menu.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-zinc-700 transition hover:text-amber-600">{item.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="https://www.youtube.com/@CasadeOra%C3%A7%C3%A3o" target="_blank" className="hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:scale-[1.02] md:inline-flex">Ver YouTube</Link>
          <button type="button" className="inline-flex rounded-xl border border-zinc-200 p-2 text-zinc-700 md:hidden" onClick={() => setMobileOpen((prev) => !prev)} aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {menu.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-amber-50 hover:text-amber-700">{item.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
