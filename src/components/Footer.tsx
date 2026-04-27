import Link from "next/link";
import { Hammer, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-swiss-dark text-swiss-light py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="bg-swiss-red text-white p-2 rounded-sm">
              <Hammer size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Redecobau</span>
          </Link>
          <p className="text-swiss-gray text-sm leading-relaxed mb-4 text-gray-400">
            Ihr zuverlässiger Partner für Reparaturen, Dekoration und Baustellen in Zürich und Basel.
          </p>
          <p className="text-xs text-gray-500 font-medium">Ein Unternehmen der Ncom GmbH</p>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-white font-bold mb-6 text-lg">Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-swiss-red transition-colors">Startseite</Link></li>
            <li><Link href="/ueber-uns" className="hover:text-swiss-red transition-colors">Über uns</Link></li>
            <li><Link href="/dienstleistungen" className="hover:text-swiss-red transition-colors">Dienstleistungen</Link></li>
            <li><Link href="/projekte" className="hover:text-swiss-red transition-colors">Projekte</Link></li>
            <li><Link href="/galerie" className="hover:text-swiss-red transition-colors">Galerie</Link></li>
            <li><Link href="/kontakt" className="hover:text-swiss-red transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white font-bold mb-6 text-lg">Kontakt</h3>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-swiss-red shrink-0 mt-0.5" />
              <p>Ländischstrasse 135<br />8706 Meilen<br />Schweiz</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-swiss-red shrink-0" />
              <a href="mailto:info@redecobau.ch" className="hover:text-white transition-colors">info@redecobau.ch</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-swiss-red shrink-0" />
              <a href="tel:+41765054057" className="hover:text-white transition-colors">+41 76 505 40 57</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
        <p>Product by Ncom GmbH</p>
        <span className="hidden md:inline text-gray-600">·</span>
        <a href="mailto:info@redecobau.ch" className="hover:text-white transition-colors">info@redecobau.ch</a>
      </div>
    </footer>
  );
}
