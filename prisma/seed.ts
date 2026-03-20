import bcrypt from 'bcryptjs';
import { PrismaClient, Role, ContentStatus, EventStatus } from '@prisma/client';

const db = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Admin123!', 10);

  const admin = await db.user.upsert({
    where: { email: 'admin@casadeoracao.org' },
    update: {},
    create: {
      name: 'Pedro Antonio Guimarães',
      email: 'admin@casadeoracao.org',
      passwordHash,
      role: Role.ADMINISTRADOR
    }
  });

  await db.post.upsert({
    where: { slug: 'mensagem-da-semana' },
    update: {},
    create: {
      title: 'Mensagem da semana',
      slug: 'mensagem-da-semana',
      excerpt: 'Mensagem de encorajamento para a igreja.',
      content: 'Conteúdo inicial da mensagem da semana.',
      status: ContentStatus.PUBLICADO,
      publishedAt: new Date(),
      authorId: admin.id
    }
  });

  await db.announcement.create({
    data: {
      title: 'Culto especial de sexta-feira',
      content: 'Todos os membros estão convidados para o culto especial.',
      priority: 1,
      status: ContentStatus.PUBLICADO,
      publishedAt: new Date(),
      authorId: admin.id
    }
  }).catch(() => undefined);

  await db.event.create({
    data: {
      title: 'Vigília mensal',
      description: 'Momento especial de oração e consagração.',
      location: 'Templo sede',
      startDate: new Date('2026-03-29T21:00:00.000Z'),
      endDate: new Date('2026-03-30T04:00:00.000Z'),
      status: EventStatus.PUBLICADO,
      authorId: admin.id
    }
  }).catch(() => undefined);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await db.$disconnect();
    process.exit(1);
  });
