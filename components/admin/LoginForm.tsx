'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { loginAction } from '@/lib/actions';

const initialState = { error: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="w-full rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 disabled:opacity-60">
      {pending ? 'A entrar...' : 'Entrar'}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-semibold text-zinc-700">Email</label>
        <input name="email" type="email" placeholder="admin@casadeoracao.org" className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-amber-500" required />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-zinc-700">Palavra-passe</label>
        <input name="password" type="password" placeholder="••••••••" className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-amber-500" required />
      </div>
      {state?.error ? <p className="text-sm text-red-600">{state.error}</p> : null}
      <SubmitButton />
    </form>
  );
}
