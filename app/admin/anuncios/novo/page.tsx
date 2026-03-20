import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import SimpleForm from '@/components/admin/SimpleForm';
import { createAnnouncementAction } from '@/lib/actions';
import { canPublish } from '@/lib/permissions';

export default async function NovoAnuncioPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');
  if (!canPublish(session.user.role)) redirect('/admin');

  return (
    <AdminShell role={session.user.role} title="Novo anúncio">
      <SimpleForm
        action={createAnnouncementAction}
        initialState={{ error: '', success: '' }}
        submitLabel="Guardar anúncio"
        fields={(
          <>
            <input name="title" placeholder="Título" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
            <textarea name="content" rows={7} placeholder="Conteúdo do anúncio" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
            <input name="priority" type="number" min="0" max="10" defaultValue="0" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
            <select name="status" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" defaultValue="RASCUNHO">
              <option value="RASCUNHO">Rascunho</option>
              <option value="PUBLICADO">Publicado</option>
              <option value="AGENDADO">Agendado</option>
            </select>
          </>
        )}
      />
    </AdminShell>
  );
}
