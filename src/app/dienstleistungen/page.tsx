"use client";

import { motion } from "framer-motion";
import { Wrench, PaintBucket, HardHat, Check } from "lucide-react";
import Image from "next/image";

export default function Dienstleistungen() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-swiss-dark text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Unsere <span className="text-swiss-red">Dienste</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Umfassende Lösungen für Reparaturen, Dekoration und Baustellenmanagement. Alles aus einer Hand.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-swiss-red/20 to-transparent opacity-50" />
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Reparaturen */}
          <ServiceSection 
            id="reparaturen"
            title="Reparaturen"
            description="Wir bieten schnelle und effiziente Reparaturdienstleistungen für private und gewerbliche Kunden. Von kleinen Instandsetzungen bis hin zu komplexen Sanierungen garantieren wir höchste Qualität und Langlebigkeit."
            icon={<Wrench size={48} className="text-swiss-red" />}
            features={["Wasserschadensanierung", "Fassadenreparaturen", "Maler- und Gipserarbeiten", "Bodenbelagsreparaturen"]}
            reverse={false}
            imageSrc="/renovation.png"
          />

          {/* Decoration */}
          <ServiceSection 
            id="decoration"
            title="Decoration"
            description="Unsere Dekorations- und Innenausbauservices verwandeln Ihre Räume in inspirierende Umgebungen. Wir kombinieren Ästhetik mit Funktionalität und setzen Ihre individuellen Wünsche präzise um."
            icon={<PaintBucket size={48} className="text-swiss-red" />}
            features={["Farbkonzepte & Beratung", "Trockenbau & Raumteiler", "Hochwertige Wandverkleidungen", "Lichtdesign-Integration"]}
            reverse={true}
            imageSrc="/decoration.png"
          />

          {/* Baustelle */}
          <ServiceSection 
            id="baustelle"
            title="Baustelle"
            description="Als erfahrener Partner übernehmen wir das komplette Baustellenmanagement. Wir koordinieren alle Gewerke, überwachen den Baufortschritt und stellen sicher, dass Ihr Projekt termingerecht und im Budgetrahmen abgeschlossen wird."
            icon={<HardHat size={48} className="text-swiss-red" />}
            features={["Bauleitung & Koordination", "Qualitätskontrolle", "Termin- und Kostenüberwachung", "Sicherheitsmanagement"]}
          />
        </div>
      </section>
    </div>
  );
}

function ServiceSection({ id, title, description, features, image, icon, reverse }: { id: string, title: string, description: string, features: string[], image: string, icon: React.ReactNode, reverse?: boolean }) {
  return (
    <div id={id} className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <div className="bg-swiss-light w-24 h-24 flex items-center justify-center rounded-sm mb-8">
          {icon}
        </div>
        <h2 className="text-4xl font-bold mb-6 text-swiss-dark dark:text-white">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-4">
          {features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center gap-3 font-medium text-swiss-dark dark:text-gray-200">
              <div className="bg-swiss-red/10 p-1 rounded-full">
                <Check size={16} className="text-swiss-red" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <div className="aspect-square bg-swiss-gray rounded-sm relative overflow-hidden group">
          <Image 
          src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-swiss-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </div>
  );
}
