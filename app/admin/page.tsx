import Link from 'next/link';
import { CalendarDays, FileText, Megaphone, Plus, Users } from 'lucide-react';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import AdminShell from '@/components/admin/AdminShell';
import { canEdit, canPublish } from '@/lib/permissions';
import { redirect } from 'next/navigation';

function StatCard({ icon: Icon, title, value, helper }: any) {
  return (
    <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-zinc-500">{title}</p>
        <Icon className="h-5 w-5 text-amber-600" />
      </div>
      <p className="mt-5 text-3xl font-black text-zinc-900">{value}</p>
      <p className="mt-2 text-sm text-zinc-500">{helper}</p>
    </div>
  );
}

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const [posts, announcements, events, users] = await Promise.all([
    db.post.count(),
    db.announcement.count(),
    db.event.count(),
    db.user.count()
  ]);

  const recentPosts = await db.post.findMany({ orderBy: { createdAt: 'desc' }, take: 5 });
  const nextEvents = await db.event.findMany({ orderBy: { startDate: 'asc' }, take: 5 });

  return (
    <AdminShell
      role={session.user.role}
      title="Gestão do website"
      subtitle={`Sessão iniciada como ${session.user.name} — ${session.user.role}`}
      actions={
        <>
          {canPublish(session.user.role) ? (
            <Link href="/admin/publicacoes/novo" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white">
              <Plus className="h-4 w-4" /> Nova publicação
            </Link>
          ) : null}
          {canEdit(session.user.role) ? (
            <Link href="/admin/eventos/novo" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-700">
              <Plus className="h-4 w-4" /> Novo evento
            </Link>
          ) : null}
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FileText} title="Publicações" value={posts} helper="Conteúdos criados" />
        <StatCard icon={Megaphone} title="Anúncios" value={announcements} helper="Anúncios activos" />
        <StatCard icon={CalendarDays} title="Eventos" value={events} helper="Eventos registados" />
        <StatCard icon={Users} title="Oficiais" value={users} helper="Utilizadores autorizados" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-zinc-900">Últimas publicações</h2>
            <Link href="/admin/publicacoes" className="text-sm font-semibold text-amber-700">Ver tudo</Link>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="grid grid-cols-3 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white">
              <div>Título</div><div>Estado</div><div>Data</div>
            </div>
            {recentPosts.map((row) => (
              <div key={row.id} className="grid grid-cols-3 border-t border-zinc-100 px-4 py-4 text-sm text-zinc-700">
                <div>{row.title}</div><div>{row.status}</div><div>{row.createdAt.toLocaleDateString('pt-PT')}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-zinc-900">Próximos eventos</h2>
          <div className="mt-6 space-y-4">
            {nextEvents.map((event) => (
              <div key={event.id} className="rounded-2xl bg-zinc-50 px-4 py-4">
                <p className="text-sm font-semibold text-zinc-900">{event.title}</p>
                <p className="mt-1 text-sm text-zinc-500">{event.startDate.toLocaleDateString('pt-PT')}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
