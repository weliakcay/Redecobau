"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Villa Innenausbau", category: "Decoration & Reparaturen", location: "Zürichberg", image: "/gallery/after-5.png" },
  { id: 2, title: "Modernes Büro", category: "Decoration", location: "Basel Zentrum", image: "/projects/interior-2.png" },
  { id: 3, title: "Fassadenrenovation", category: "Baustelle", location: "Meilen", image: "/renovation.png" },
  { id: 4, title: "Loft Ausbau", category: "Decoration & Baustelle", location: "Zürich West", image: "/projects/interior-3.png" },
  { id: 5, title: "Historisches Gebäude", category: "Reparaturen", location: "Basel Altstadt", image: "/gallery/after-3.png" },
  { id: 6, title: "Restaurant Design", category: "Decoration", location: "Zürich Enge", image: "/decoration.png" },
];

export default function Projekte() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-swiss-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-swiss-dark">
              Unsere <span className="text-swiss-red">Projekte</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte in Zürich, Basel und Umgebung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }: { project: { id: number, title: string, category: string, location: string, image: string }, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index % 2 === 0 ? 0 : 0.2 }}
      className="group cursor-pointer block"
    >
      <div className="aspect-[4/3] bg-swiss-gray rounded-sm mb-6 relative overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute top-4 right-4 bg-white text-swiss-dark w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight size={24} />
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-swiss-dark mb-2 group-hover:text-swiss-red transition-colors">{project.title}</h3>
          <p className="text-gray-500 font-medium">{project.category}</p>
        </div>
        <div className="text-sm font-medium text-gray-400 bg-swiss-light px-3 py-1 rounded-sm">
          {project.location}
        </div>
      </div>
    </motion.div>
  );
}
