import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redecobau | Ncom GmbH - Reparaturen, Decoration, Baustelle",
  description: "Ihr zuverlässiger Partner für Reparaturen, Dekoration und Baustellen in Zürich und Basel. Ein Unternehmen der Ncom GmbH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-swiss-white text-swiss-dark selection:bg-swiss-red selection:text-white">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-[72px]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
