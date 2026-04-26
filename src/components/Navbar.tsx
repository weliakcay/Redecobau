import Link from "next/link";
import { Hammer } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-swiss-white/90 backdrop-blur-md border-b border-swiss-gray/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-swiss-red text-white p-2 rounded-sm group-hover:bg-swiss-dark transition-colors">
            <Hammer size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-swiss-dark">Redecobau</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-swiss-gray">
          <Link href="/" className="hover:text-swiss-red transition-colors">Startseite</Link>
          <Link href="/ueber-uns" className="hover:text-swiss-red transition-colors">Über uns</Link>
          <Link href="/dienstleistungen" className="hover:text-swiss-red transition-colors">Dienstleistungen</Link>
          <Link href="/projekte" className="hover:text-swiss-red transition-colors">Projekte</Link>
          <Link href="/galerie" className="hover:text-swiss-red transition-colors">Galerie</Link>
          <Link href="/kontakt" className="bg-swiss-dark text-swiss-white px-5 py-2.5 rounded-sm hover:bg-swiss-red transition-all">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
}
