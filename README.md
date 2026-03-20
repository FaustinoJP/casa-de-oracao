# Casa de Oração

Projeto Next.js com site público e backoffice no mesmo repositório.

## Áreas

- Site público: `/`
- Backoffice: `/admin`

## Stack

- Next.js 14
- Tailwind CSS
- Prisma
- PostgreSQL
- Auth.js / NextAuth

## Perfis

- Administrador
- Editor
- Publicador

## Instalação

1. Copie `.env.example` para `.env`
2. Ajuste `DATABASE_URL`, `AUTH_SECRET` e `AUTH_URL`
3. Instale dependências
4. Gere Prisma Client
5. Faça push da base
6. Rode o seed
7. Inicie o projeto

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

## Credenciais iniciais

- Email: `admin@casadeoracao.org`
- Palavra-passe: `Admin123!`

## Deploy no Vercel

1. Suba este projeto para o GitHub
2. Importe no Vercel
3. Defina as variáveis de ambiente
4. Use um banco PostgreSQL
5. Faça deploy
