import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import AdminShell from '@/components/admin/AdminShell';
import SimpleForm from '@/components/admin/SimpleForm';
import { createOfficialAction } from '@/lib/actions';
import { canManageOfficials } from '@/lib/permissions';

export default async function OficiaisPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');
  if (!canManageOfficials(session.user.role)) redirect('/admin');

  const users = await db.user.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <AdminShell role={session.user.role} title="Oficiais">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white">
            <div>Nome</div><div>Email</div><div>Perfil</div>
          </div>
          {users.map((user) => (
            <div key={user.id} className="grid grid-cols-3 border-t border-zinc-100 px-4 py-4 text-sm text-zinc-700">
              <div>{user.name}</div><div>{user.email}</div><div>{user.role}</div>
            </div>
          ))}
        </div>
        <SimpleForm
          action={createOfficialAction}
          initialState={{ error: '', success: '' }}
          submitLabel="Criar oficial"
          fields={(
            <>
              <input name="name" placeholder="Nome completo" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
              <input name="email" type="email" placeholder="Email" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
              <input name="password" type="password" placeholder="Palavra-passe" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" required />
              <select name="role" className="w-full rounded-2xl border border-zinc-200 px-4 py-3" defaultValue="PUBLICADOR">
                <option value="ADMINISTRADOR">Administrador</option>
                <option value="EDITOR">Editor</option>
                <option value="PUBLICADOR">Publicador</option>
              </select>
            </>
          )}
        />
      </div>
    </AdminShell>
  );
}
