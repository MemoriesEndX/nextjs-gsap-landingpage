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
  title: "Jasa Cetak Kaos DTF & DTG | Toko Dafa",
  description:
    "Jasa cetak kaos DTF dan DTG profesional untuk bisnis, event, dan kebutuhan personal dengan kualitas premium.",
  keywords: [
    "cetak kaos dtf",
    "cetak kaos dtg",
    "jasa sablon kaos",
    "cetak kaos custom",
    "toko dafa",
  ],
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
