import Link from 'next/link';
import { CalendarDays, FileText, Image as ImageIcon, Megaphone, ShieldCheck, Users } from 'lucide-react';
import { canManageOfficials } from '@/lib/permissions';

export default function AdminSidebar({ role }: { role: string }) {
  const items = [
    { href: '/admin', label: 'Dashboard', icon: ShieldCheck },
    { href: '/admin/publicacoes', label: 'Publicações', icon: FileText },
    { href: '/admin/anuncios', label: 'Anúncios', icon: Megaphone },
    { href: '/admin/eventos', label: 'Eventos', icon: CalendarDays },
    { href: '/admin/media', label: 'Galeria & Mídia', icon: ImageIcon }
  ];

  if (canManageOfficials(role)) items.push({ href: '/admin/oficiais', label: 'Oficiais', icon: Users });

  return (
    <aside className="w-full border-b border-zinc-200 bg-white p-4 lg:w-72 lg:border-b-0 lg:border-r lg:p-6">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">Casa de Oração</p>
        <h2 className="mt-2 text-2xl font-black text-zinc-900">Backoffice</h2>
        <p className="mt-2 text-sm text-zinc-500">Área restrita para oficiais</p>
      </div>
      <nav className="grid gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100">
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
