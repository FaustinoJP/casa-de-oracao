import Image from 'next/image';
import { galleryImages } from './site-data';

export default function GallerySection() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Galeria</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Momentos da Casa de Oração</h2>
        <p className="mt-4 text-zinc-600">Uma galeria simples para destacar cultos, encontros e eventos especiais.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <div key={`${image}-${index}`} className="relative h-72 overflow-hidden rounded-3xl shadow-soft">
            <Image src={image} alt={`Galeria Casa de Oração ${index + 1}`} fill className="object-cover transition duration-300 hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
