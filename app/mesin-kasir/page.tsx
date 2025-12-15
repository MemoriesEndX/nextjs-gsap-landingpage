import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MesinKasirHero from "@/components/mesin-kasir/hero"
import MesinKasirShowcase from "@/components/mesin-kasir/showcase"
import MesinKasirSpecs from "@/components/mesin-kasir/specs"
import MesinKasirPricing from "@/components/mesin-kasir/pricing"
import MesinKasirCTA from "@/components/mesin-kasir/cta"
import WhatsAppFloat from "@/components/mesin-kasir/whatsapp-float"

export const metadata: Metadata = {
  title: "Promo Paket Mesin Kasir - Solusi Kasir Hemat & Handal | Tokodafa",
  description: "Dapatkan paket mesin kasir lengkap dengan bonus Speaker, Rak Kertas, Printer, dan WiFi USB. Mulai dari Rp1.980.000. Gratis Database 50.000+ Produk. Hubungi 0822-1358-0380",
  keywords: "mesin kasir, paket kasir, kasir UMKM, promo mesin kasir, iPOS 4, printer thermal",
}

export default function MesinKasirPage() {
  return (
    <div className="dark min-h-screen bg-neutral-950">
      <Navbar />
      <main>
        <MesinKasirHero />
        <MesinKasirShowcase />
        <MesinKasirSpecs />
        <MesinKasirPricing />
        <MesinKasirCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
