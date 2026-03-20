import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { contact } from './site-data';

export default function WhatsAppButton() {
  return (
    <Link href={contact.whatsappLink} target="_blank" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-2xl transition hover:scale-[1.03]">
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </Link>
  );
}
