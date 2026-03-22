import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import AgendaSection from '@/components/AgendaSection';
import FeaturesSection from '@/components/FeaturesSection';
import PastoralSection from '@/components/PastoralSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <AgendaSection />
        <FeaturesSection />
        <PastoralSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
