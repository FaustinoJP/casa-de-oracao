import { ShieldCheck } from 'lucide-react';
import LoginForm from '@/components/admin/LoginForm';

export default function AdminLoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden bg-zinc-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-amber-300" />
            Backoffice Casa de Oração
          </div>
          <h1 className="mt-8 max-w-xl text-5xl font-black leading-tight">
            Gestão segura de conteúdos, anúncios e eventos da igreja
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-zinc-300">
            Área reservada para oficiais da direcção publicarem conteúdos, organizarem a agenda
            e acompanharem o website.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-200">
          Conta inicial de teste: admin@casadeoracao.org / Admin123!
        </div>
      </div>
      <div className="flex items-center justify-center bg-zinc-50 p-6">
        <div className="w-full max-w-md rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-2xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Acesso restrito</p>
            <h2 className="mt-3 text-3xl font-black text-zinc-900">Entrar no backoffice</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Faça login com a sua conta de oficial.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
