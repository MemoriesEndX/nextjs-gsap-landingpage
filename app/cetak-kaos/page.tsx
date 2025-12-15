import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/cetak-kaos/hero"
import Products from "@/components/cetak-kaos/products"
import Services from "@/components/cetak-kaos/services"
import Pricing from "@/components/cetak-kaos/pricing"
import Benefits from "@/components/cetak-kaos/benefits"
import CTA from "@/components/cetak-kaos/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Jasa Cetak Kaos DTF & DTG Berkualitas Tinggi - Harga Terjangkau | Toko Dafa",
  description:
    "Jasa cetak kaos DTF dan DTG profesional dengan hasil tajam, warna cerah, dan tahan lama. Cocok untuk kaos event, komunitas, bisnis clothing, dan kebutuhan personal. Harga mulai dari Rp 15.000/pcs. Proses cepat, minimal order fleksibel. Hubungi 0822-1358-0380.",
  keywords: [
    "cetak kaos dtf",
    "cetak kaos dtg",
    "jasa sablon kaos",
    "cetak kaos custom",
    "cetak kaos murah",
    "sablon kaos berkualitas",
    "cetak kaos satuan",
    "cetak kaos event",
    "cetak kaos komunitas",
    "jasa printing kaos",
    "toko dafa cetak kaos",
    "sablon dtf terdekat",
    "sablon dtg profesional",
  ],
  openGraph: {
    title: "Jasa Cetak Kaos DTF & DTG Berkualitas Tinggi | Toko Dafa",
    description:
      "Cetak kaos custom dengan teknologi DTF & DTG. Hasil tajam, warna cerah, tahan lama. Cocok untuk event, bisnis, dan komunitas. Mulai dari Rp 15.000/pcs. Order sekarang!",
    url: "https://tokodafa.com/cetak-kaos",
    siteName: "Toko Dafa",
    images: [
      {
        url: "/og-image-cetak-kaos.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Cetak Kaos DTF & DTG - Toko Dafa",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Cetak Kaos DTF & DTG Berkualitas | Toko Dafa",
    description:
      "Cetak kaos custom berkualitas tinggi dengan teknologi DTF & DTG. Harga mulai Rp 15.000/pcs. Order via WhatsApp!",
    images: ["/og-image-cetak-kaos.jpg"],
  },
  alternates: {
    canonical: "https://tokodafa.com/cetak-kaos",
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

export default function CetakKaosPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Pricing />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  )
}
