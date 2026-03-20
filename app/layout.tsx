import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casa de Oração',
  description: 'Tabernáculo de fé, adoração, intercessão e comunhão',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
