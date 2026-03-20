'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { auth, signIn, signOut } from '@/lib/auth';
import { db } from '@/lib/db';
import { canEdit, canManageOfficials, canPublish } from '@/lib/permissions';
import { ContentStatus, EventStatus, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const postSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  excerpt: z.string().optional(),
  content: z.string().min(10),
  status: z.nativeEnum(ContentStatus)
});

const announcementSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  priority: z.coerce.number().int().min(0).max(10),
  status: z.nativeEnum(ContentStatus)
});

const eventSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  location: z.string().optional(),
  startDate: z.string().min(1),
  endDate: z.string().optional(),
  status: z.nativeEnum(EventStatus)
});

const officialSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.nativeEnum(Role)
});

async function requireSession() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');
  return session;
}

export async function loginAction(_: { error?: string } | undefined, formData: FormData) {
  try {
    await signIn('credentials', {
      email: String(formData.get('email') ?? ''),
      password: String(formData.get('password') ?? ''),
      redirectTo: '/admin'
    });
    return {};
  } catch {
    return { error: 'Credenciais inválidas.' };
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: '/admin/login' });
}

export async function createPostAction(_: { error?: string; success?: string } | undefined, formData: FormData) {
  const session = await requireSession();
  if (!canPublish(session.user.role)) return { error: 'Sem permissão.' };

  const parsed = postSchema.safeParse({
    title: formData.get('title'),
    slug: formData.get('slug'),
    excerpt: formData.get('excerpt') || undefined,
    content: formData.get('content'),
    status: formData.get('status')
  });

  if (!parsed.success) return { error: 'Preencha os campos correctamente.' };

  await db.post.create({
    data: {
      ...parsed.data,
      authorId: session.user.id,
      publishedAt: parsed.data.status === 'PUBLICADO' ? new Date() : null
    }
  });

  revalidatePath('/admin');
  revalidatePath('/admin/publicacoes');
  return { success: 'Publicação criada com sucesso.' };
}

export async function createAnnouncementAction(_: { error?: string; success?: string } | undefined, formData: FormData) {
  const session = await requireSession();
  if (!canPublish(session.user.role)) return { error: 'Sem permissão.' };

  const parsed = announcementSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    priority: formData.get('priority'),
    status: formData.get('status')
  });

  if (!parsed.success) return { error: 'Preencha os campos correctamente.' };

  await db.announcement.create({
    data: {
      ...parsed.data,
      authorId: session.user.id,
      publishedAt: parsed.data.status === 'PUBLICADO' ? new Date() : null
    }
  });

  revalidatePath('/admin');
  revalidatePath('/admin/anuncios');
  return { success: 'Anúncio criado com sucesso.' };
}

export async function createEventAction(_: { error?: string; success?: string } | undefined, formData: FormData) {
  const session = await requireSession();
  if (!canEdit(session.user.role)) return { error: 'Sem permissão.' };

  const parsed = eventSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description') || undefined,
    location: formData.get('location') || undefined,
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate') || undefined,
    status: formData.get('status')
  });

  if (!parsed.success) return { error: 'Preencha os campos correctamente.' };

  await db.event.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      location: parsed.data.location,
      startDate: new Date(parsed.data.startDate),
      endDate: parsed.data.endDate ? new Date(parsed.data.endDate) : null,
      status: parsed.data.status,
      authorId: session.user.id
    }
  });

  revalidatePath('/admin');
  revalidatePath('/admin/eventos');
  return { success: 'Evento criado com sucesso.' };
}

export async function createOfficialAction(_: { error?: string; success?: string } | undefined, formData: FormData) {
  const session = await requireSession();
  if (!canManageOfficials(session.user.role)) return { error: 'Sem permissão.' };

  const parsed = officialSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    role: formData.get('role')
  });

  if (!parsed.success) return { error: 'Preencha os campos correctamente.' };

  const passwordHash = await bcrypt.hash(parsed.data.password, 10);

  await db.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      role: parsed.data.role,
      passwordHash
    }
  });

  revalidatePath('/admin/oficiais');
  return { success: 'Oficial criado com sucesso.' };
}
