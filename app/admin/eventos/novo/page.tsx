import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import SimpleForm from '@/components/admin/SimpleForm';
import { createEventAction } from '@/lib/actions';
import { canEdit } from '@/lib/permissions';

export default async function NovoEventoPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');
  if (!canEdit(session.user.role)) redirect('/admin');

  return (
    <AdminShell role={session.user.role} title="Novo evento">
      <SimpleForm
        action={createEventAction}
        initialState={{ error: '', success: '' }}
        submitLabel="Guardar evento"
        fields={(
          <>
            <input name="title" placeholder="Título do evento" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
            <input name="location" placeholder="Local" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" />
            <textarea name="description" rows={6} placeholder="Descrição" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" />
            <input name="startDate" type="datetime-local" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
            <input name="endDate" type="datetime-local" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" />
            <select name="status" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" defaultValue="RASCUNHO">
              <option value="RASCUNHO">Rascunho</option>
              <option value="PUBLICADO">Publicado</option>
              <option value="CANCELADO">Cancelado</option>
            </select>
          </>
        )}
      />
    </AdminShell>
  );
}
