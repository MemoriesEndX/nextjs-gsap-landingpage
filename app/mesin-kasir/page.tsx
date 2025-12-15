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
  title: "Paket Mesin Kasir UMKM Lengkap - Mulai Rp 1.980.000 | Toko Dafa",
  description: 
    "Dapatkan paket mesin kasir lengkap untuk UMKM dengan bonus Speaker, Rak Kertas, Printer Thermal, dan WiFi USB. Sistem iPOS 4 modern, mudah digunakan, gratis database 50.000+ produk. Cocok untuk toko, warung, minimarket, dan usaha kecil. Harga mulai Rp 1.980.000. Hubungi 0822-1358-0380 untuk konsultasi gratis.",
  keywords: [
    "mesin kasir murah",
    "paket kasir UMKM",
    "sistem kasir toko",
    "mesin kasir lengkap",
    "iPOS 4",
    "printer thermal",
    "kasir minimarket",
    "mesin kasir warung",
    "sistem kasir modern",
    "mesin kasir bonus printer",
    "kasir point of sale",
    "jual mesin kasir",
    "harga mesin kasir",
  ],
  openGraph: {
    title: "Paket Mesin Kasir UMKM Lengkap - Mulai Rp 1.980.000 | Toko Dafa",
    description:
      "Sistem kasir iPOS 4 lengkap dengan bonus Speaker, Printer, WiFi USB, dan database 50.000+ produk. Solusi kasir modern untuk UMKM. Order sekarang!",
    url: "https://tokodafa.com/mesin-kasir",
    siteName: "Toko Dafa",
    images: [
      {
        url: "/og-image-mesin-kasir.jpg",
        width: 1200,
        height: 630,
        alt: "Paket Mesin Kasir UMKM - Toko Dafa",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paket Mesin Kasir UMKM - Mulai Rp 1.980.000",
    description:
      "Sistem kasir iPOS 4 lengkap dengan bonus. Gratis database 50.000+ produk. Hubungi 0822-1358-0380",
    images: ["/og-image-mesin-kasir.jpg"],
  },
  alternates: {
    canonical: "https://tokodafa.com/mesin-kasir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
