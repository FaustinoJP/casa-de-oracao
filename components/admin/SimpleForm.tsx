'use client';

import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-bold text-white disabled:opacity-60">
      {pending ? 'A guardar...' : label}
    </button>
  );
}

export default function SimpleForm({ action, initialState, fields, submitLabel }: {
  action: (state: any, formData: FormData) => Promise<any>;
  initialState: any;
  fields: React.ReactNode;
  submitLabel: string;
}) {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
      {fields}
      {state?.error ? <p className="text-sm text-red-600">{state.error}</p> : null}
      {state?.success ? <p className="text-sm text-green-700">{state.success}</p> : null}
      <SubmitButton label={submitLabel} />
    </form>
  );
}
