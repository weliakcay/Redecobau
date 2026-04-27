"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Kontakt() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (_error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Kontaktieren <span className="text-swiss-red">Sie</span> uns
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Wir freuen uns darauf, von Ihrem Projekt zu hören. Unser Team in Zürich und Basel steht Ihnen zur Verfügung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-swiss-dark">Schreiben Sie uns</h2>
              
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded-sm">
                  Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-sm">
                  Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut oder senden Sie eine E-Mail an info@redecobau.ch.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name / Firma *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-swiss-light border border-transparent focus:border-swiss-red focus:bg-white focus:ring-0 outline-none rounded-sm transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-swiss-light border border-transparent focus:border-swiss-red focus:bg-white focus:ring-0 outline-none rounded-sm transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-swiss-light border border-transparent focus:border-swiss-red focus:bg-white focus:ring-0 outline-none rounded-sm transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nachricht *</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-swiss-light border border-transparent focus:border-swiss-red focus:bg-white focus:ring-0 outline-none rounded-sm transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-swiss-dark text-white px-8 py-4 rounded-sm font-medium hover:bg-swiss-red transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                  Nachricht senden
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8 text-swiss-dark">Unsere Kontaktdaten</h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start gap-4">
                  <div className="bg-swiss-red/10 p-3 rounded-sm text-swiss-red shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-swiss-dark text-lg mb-1">Hauptsitz</h3>
                    <p>Ländischstrasse 135<br />8706 Meilen<br />Schweiz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-swiss-red/10 p-3 rounded-sm text-swiss-red shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-swiss-dark text-lg mb-1">E-Mail</h3>
                    <p><a href="mailto:info@redecobau.ch" className="hover:text-swiss-red transition-colors">info@redecobau.ch</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-swiss-red/10 p-3 rounded-sm text-swiss-red shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-swiss-dark text-lg mb-1">Telefon</h3>
                    <p><a href="tel:+41765054057" className="hover:text-swiss-red transition-colors">+41 76 505 40 57</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[16/9] bg-swiss-gray rounded-sm overflow-hidden shadow-inner border border-gray-100">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                src="https://maps.google.com/maps?q=Ländischstrasse%20135,%208706%20Meilen,%20Schweiz&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
