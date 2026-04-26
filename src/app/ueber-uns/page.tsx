"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function UeberUns() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-swiss-light py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-swiss-dark">
              Über <span className="text-swiss-red">Uns</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Redecobau ist Ihr Spezialist für hochwertige Reparaturen und Umbauten in der Schweiz. Ein stolzes Mitglied der Ncom GmbH.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/2 right-0 w-1/3 h-[200%] bg-white transform -translate-y-1/2 rotate-12 opacity-50 pointer-events-none" />
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full aspect-[4/5] bg-swiss-gray rounded-sm relative overflow-hidden group">
              <Image 
                src="/baustelle.png" 
                alt="Redecobau Team auf der Baustelle" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-swiss-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Unsere Geschichte</h2>
              <p className="text-gray-600 leading-relaxed">
                Als Teil der Ncom GmbH stehen wir für Zuverlässigkeit, Präzision und erstklassige Handwerkskunst. Wir haben es uns zur Aufgabe gemacht, Wohn- und Geschäftsräume in Zürich und Basel nach den höchsten Schweizer Qualitätsstandards zu gestalten und zu erhalten.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Unsere Werte</h2>
              <ul className="space-y-4">
                {[
                  "Höchste Schweizer Qualität",
                  "Termintreue und Zuverlässigkeit",
                  "Transparente Kommunikation",
                  "Nachhaltige Bauweise",
                  "Kundenorientierte Lösungen"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="text-swiss-red" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
