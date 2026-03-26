import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminShell({
  role,
  title,
  subtitle,
  actions,
  children
}: {
  role: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 lg:flex">
      <AdminSidebar role={role} />
      <div className="flex-1">
        <header className="border-b border-zinc-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-black text-zinc-900">{title}</h1>
              {subtitle ? <p className="mt-2 text-sm text-zinc-500">{subtitle}</p> : null}
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </header>
        <main className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
