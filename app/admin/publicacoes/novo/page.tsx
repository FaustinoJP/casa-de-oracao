import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import SimpleForm from '@/components/admin/SimpleForm';
import { createPostAction } from '@/lib/actions';
import { canPublish } from '@/lib/permissions';

export default async function NovaPublicacaoPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');
  if (!canPublish(session.user.role)) redirect('/admin');

  return (
    <AdminShell role={session.user.role} title="Nova publicação">
      <SimpleForm
        action={createPostAction}
        initialState={{ error: '', success: '' }}
        submitLabel="Guardar publicação"
        fields={(
          <>
            <input name="title" placeholder="Título" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
            <input name="slug" placeholder="slug-da-publicacao" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
            <input name="excerpt" placeholder="Resumo" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" />
            <textarea name="content" rows={8} placeholder="Conteúdo" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
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
