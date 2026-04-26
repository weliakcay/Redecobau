"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const beforeAfterData = [
  {
    id: 1,
    title: "Chalet Renovation - Zürichberg",
    before: "/gallery/before-1.png",
    after: "/gallery/after-1.png",
    description: "Komplette Fassaden- und Dachsanierung eines klassischen Schweizer Chalets."
  },
  {
    id: 2,
    title: "Moderne Villa - Küsnacht",
    before: "/gallery/before-2.png",
    after: "/gallery/after-2.png",
    description: "Transformation eines 70er-Jahre Baus in eine hochmoderne Villa mit großen Glasfronten."
  },
  {
    id: 3,
    title: "Altbau Sanierung - Basel",
    before: "/gallery/before-3.png",
    after: "/gallery/after-3.png",
    description: "Liebevolle Restaurierung eines historischen Gebäudes unter Beibehaltung der Originalstruktur."
  },
  {
    id: 4,
    title: "Einfamilienhaus - Meilen",
    before: "/gallery/before-4.png",
    after: "/gallery/after-4.png",
    description: "Erweiterung und energetische Sanierung mit neuem Anbau in Holzbauweise."
  },
  {
    id: 5,
    title: "Innenausbau Loft - Zürich West",
    before: "/gallery/before-5.png",
    after: "/gallery/after-5.png",
    description: "Umbau einer alten Industriehalle in ein luxuriöses Wohn-Loft."
  }
];

export default function Galerie() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-swiss-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Unsere <span className="text-swiss-red">Galerie</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Vorher-Nachher Vergleiche unserer schönsten Umbauten und Renovationen in der Schweiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-24 bg-swiss-light">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {beforeAfterData.map((item, idx) => (
            <BeforeAfterSlider key={item.id} item={item} index={idx} />
          ))}
        </div>
      </section>

      {/* Impressionen Section (Alternative Style) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-swiss-dark">Impressionen unserer Arbeit</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 aspect-square relative rounded-sm overflow-hidden">
              <Image src="/baustelle.png" alt="Impression 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image src="/decoration.png" alt="Impression 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image src="/renovation.png" alt="Impression 3" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image src="/hero.png" alt="Impression 4" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image src="/decoration.png" alt="Impression 5" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BeforeAfterSlider({ item, index }: { item: { id: number, title: string, before: string, after: string, description: string }, index: number }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row gap-12 items-center"
    >
      <div className={`w-full md:w-1/3 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
        <h3 className="text-3xl font-bold mb-4 text-swiss-dark">{item.title}</h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{item.description}</p>
        <div className="flex gap-4 items-center text-sm font-bold text-gray-400">
          <span className="uppercase tracking-widest">Vorher</span>
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="uppercase tracking-widest text-swiss-red">Nachher</span>
        </div>
      </div>

      <div className={`w-full md:w-2/3 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
        <div 
          className="relative aspect-[16/9] bg-gray-200 rounded-sm overflow-hidden select-none cursor-ew-resize touch-pan-y"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <Image src={item.after} alt="Nachher" fill className="object-cover pointer-events-none" unoptimized />

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image src={item.before} alt="Vorher" fill className="object-cover w-full h-full" style={{ width: '100vw', minWidth: '100%' }} unoptimized />
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none flex items-center justify-center transform -translate-x-1/2"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-swiss-dark">
              <ChevronLeft size={16} className="absolute -translate-x-1.5" />
              <ChevronRight size={16} className="absolute translate-x-1.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
