import Link from 'next/link';
import { Plus } from 'lucide-react';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import AdminShell from '@/components/admin/AdminShell';
import { redirect } from 'next/navigation';

export default async function PublicacoesPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');
  const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <AdminShell role={session.user.role} title="Publicações" actions={<Link href="/admin/publicacoes/novo" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white"><Plus className="h-4 w-4" /> Nova publicação</Link>}>
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="grid grid-cols-4 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white">
          <div>Título</div><div>Slug</div><div>Estado</div><div>Data</div>
        </div>
        {posts.map((post) => (
          <div key={post.id} className="grid grid-cols-4 border-t border-zinc-100 px-4 py-4 text-sm text-zinc-700">
            <div>{post.title}</div><div>{post.slug}</div><div>{post.status}</div><div>{post.createdAt.toLocaleDateString('pt-PT')}</div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
