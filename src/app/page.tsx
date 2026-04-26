"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Wrench, PaintBucket, HardHat } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="w-full bg-swiss-white" ref={containerRef}>
      {/* 1. IMMERSIVE HERO SECTION */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1, scale: scale1 }} className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Premium Swiss Construction" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-swiss-dark/90" />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20"
          style={{ opacity: opacity1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-medium tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-swiss-red animate-pulse" />
            Zürich & Basel
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1]">
            Schweizer Präzision.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-swiss-red to-red-400">
              Ihre Vision.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-12">
            Exklusive Umbauten, hochwertige Reparaturen und meisterhafte Dekoration für anspruchsvolle Kunden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/kontakt" className="group relative px-8 py-4 bg-swiss-red text-white font-medium overflow-hidden rounded-sm w-full sm:w-auto flex justify-center">
              <span className="relative z-10 flex items-center gap-2">Projekt anfragen <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center gap-2 text-swiss-red opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20 font-medium">
                Projekt anfragen <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="/galerie" className="group px-8 py-4 bg-transparent text-white border border-white/30 hover:bg-white hover:text-swiss-dark font-medium rounded-sm transition-all w-full sm:w-auto flex justify-center text-center">
              Unsere Galerie ansehen
            </Link>
          </div>
        </motion.div>

      </section>

      {/* 2. INFINITE MARQUEE */}
      <div className="bg-swiss-red text-white py-4 overflow-hidden flex whitespace-nowrap border-y border-red-800">
        <motion.div 
          className="flex gap-12 text-sm font-bold uppercase tracking-widest items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span>Reparaturen</span>
              <span className="w-2 h-2 bg-white rounded-full" />
              <span>Decoration</span>
              <span className="w-2 h-2 bg-white rounded-full" />
              <span>Baustelle</span>
              <span className="w-2 h-2 bg-white rounded-full" />
              <span>Swiss Quality</span>
              <span className="w-2 h-2 bg-white rounded-full" />
              <span>Ncom GmbH</span>
              <span className="w-2 h-2 bg-white rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. TRUST & STATS SECTION */}
      <section className="py-24 bg-swiss-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { value: "15+", label: "Jahre Erfahrung" },
            { value: "250+", label: "Abgeschlossene Projekte" },
            { value: "100%", label: "Schweizer Qualität" },
            { value: "2", label: "Standorte (Zürich/Basel)" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl font-extrabold text-swiss-dark mb-2">{stat.value}</h3>
              <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. BENTO GRID SERVICES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:flex justify-between items-end"
          >
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold tracking-tighter mb-6 text-swiss-dark dark:text-white">Unsere Expertise.</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Architektur, Design und Handwerk in perfekter Harmonie. Wir decken das gesamte Spektrum Ihres Bauvorhabens ab.</p>
            </div>
            <Link href="/dienstleistungen" className="hidden md:flex items-center gap-2 text-swiss-red font-bold hover:text-swiss-dark dark:hover:text-white transition-colors group">
              Alle Dienste ansehen
              <div className="bg-swiss-red/10 p-2 rounded-full group-hover:bg-swiss-dark/10 transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento Item 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative rounded-sm overflow-hidden group"
            >
              <Image src="/baustelle.png" alt="Baustelle" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <HardHat className="text-swiss-red" />
                      <span className="text-swiss-red font-bold tracking-widest uppercase text-sm">Baustelle</span>
                    </div>
                    <h3 className="text-3xl font-bold">Komplettes Baumanagement</h3>
                  </div>
                  <Link href="/dienstleistungen#baustelle" className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-swiss-red transition-colors">
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-swiss-gray text-white p-8 rounded-sm relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-swiss-red/20 blur-3xl rounded-full" />
              <div>
                <Wrench className="text-swiss-red mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Reparaturen</h3>
                <p className="text-gray-400">Schnelle Instandsetzung mit Fokus auf Detail und Langlebigkeit.</p>
              </div>
              <Link href="/dienstleistungen#reparaturen" className="text-swiss-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-swiss-light dark:bg-swiss-dark p-8 rounded-sm relative overflow-hidden flex flex-col justify-between border border-gray-100 dark:border-gray-800 group"
            >
              <div>
                <PaintBucket className="text-swiss-red mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4 text-swiss-dark dark:text-white">Decoration</h3>
                <p className="text-gray-600 dark:text-gray-400">Stilvoller Innenausbau und hochwertige Raumgestaltung.</p>
              </div>
              <Link href="/dienstleistungen#decoration" className="text-swiss-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Bento Item 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 relative rounded-sm overflow-hidden group"
            >
              <Image src="/decoration.png" alt="Decoration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-swiss-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-8 left-8">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30">Referenzprojekt</span>
              </div>
              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-bold">Premium Innenausbau Basel</h3>
                  <Link href="/projekte" className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-swiss-red transition-colors">
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. BRAND PROMISE / TESTIMONIAL */}
      <section className="py-32 bg-swiss-dark text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-swiss-red/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-10 text-swiss-red">
            <svg className="w-16 h-16 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
            &quot;Redecobau vereint höchste Handwerkskunst mit modernem Design. Ein Partner, auf den man sich in der Schweiz verlassen kann.&quot;
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-swiss-red flex items-center justify-center font-bold text-xl">N</div>
            <div className="text-left">
              <p className="font-bold text-lg">Ncom GmbH</p>
              <p className="text-gray-400">Muttergesellschaft</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODERN CTA SECTION */}
      <section className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-swiss-gray rounded-sm p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0 opacity-20">
              <Image src="/renovation.png" alt="Pattern" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-swiss-dark/90 z-0" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Starten wir Ihr Projekt.</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Egal ob kleine Reparatur oder komplette Sanierung. Wir sind Ihr Ansprechpartner in Zürich und Basel.
              </p>
              <Link 
                href="/kontakt" 
                className="inline-flex items-center gap-3 bg-swiss-red text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-white hover:text-swiss-red transition-all transform hover:scale-105"
              >
                Kontakt aufnehmen <ArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
