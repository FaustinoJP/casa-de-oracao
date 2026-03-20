import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';

export default async function MediaPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  return (
    <AdminShell role={session.user.role} title="Galeria & Mídia" subtitle="Área preparada para upload e gestão de imagens.">
      <div className="rounded-[2rem] border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-500">
        Próximo passo: integrar upload real de imagens para banners, galerias e capas.
      </div>
    </AdminShell>
  );
}
