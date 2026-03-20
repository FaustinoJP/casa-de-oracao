import Link from 'next/link';
import { Plus } from 'lucide-react';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import AdminShell from '@/components/admin/AdminShell';
import { redirect } from 'next/navigation';

export default async function AnunciosPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');
  const items = await db.announcement.findMany({ orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }] });

  return (
    <AdminShell role={session.user.role} title="Anúncios" actions={<Link href="/admin/anuncios/novo" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white"><Plus className="h-4 w-4" /> Novo anúncio</Link>}>
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="grid grid-cols-4 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white">
          <div>Título</div><div>Prioridade</div><div>Estado</div><div>Data</div>
        </div>
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-4 border-t border-zinc-100 px-4 py-4 text-sm text-zinc-700">
            <div>{item.title}</div><div>{item.priority}</div><div>{item.status}</div><div>{item.createdAt.toLocaleDateString('pt-PT')}</div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
