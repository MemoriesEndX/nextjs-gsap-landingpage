import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TrustedBrands from "@/components/trusted-brands"
import PcAssembly from "@/components/pc-assembly"
import ApparelService from "@/components/apparel-service"
import RetailProducts from "@/components/retail-products"
import RetailSembako from "@/components/retail-sembako"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

import HeroCabang from "@/components/cabang/hero";
import Features from "@/components/cabang/features";
import BranchGrid from "@/components/cabang/branch-grid";
import FooterCTA from "@/components/cabang/cta";

export const metadata: Metadata = {
  title: "Toko Dafa - Toko Kelontong Terdekat, Cetak Kaos DTF/DTG, Mesin Kasir & Website Bisnis",
  description:
    "Toko Dafa adalah solusi lengkap untuk kebutuhan bisnis Anda. Menyediakan produk kelontong berkualitas, jasa cetak kaos DTF/DTG profesional, paket mesin kasir UMKM lengkap, dan jasa pembuatan website bisnis custom. Cabang tersedia di berbagai lokasi untuk melayani Anda.",
  keywords: [
    "toko kelontong terdekat",
    "yoko kelontong",
    "toko dafa",
    "toko sembako terdekat",
    "cetak kaos dtf murah",
    "cetak kaos dtg berkualitas",
    "jasa sablon kaos custom",
    "mesin kasir murah",
    "mesin kasir UMKM",
    "sistem kasir iPOS",
    "jasa pembuatan website bisnis",
    "website company profile",
    "super app indonesia",
    "web development profesional"
  ],
  openGraph: {
    title: "Toko Dafa - Solusi Lengkap Bisnis Anda",
    description:
      "Toko kelontong dengan produk lengkap, jasa cetak kaos DTF/DTG berkualitas, paket mesin kasir hemat, dan pembuatan website bisnis profesional. Kunjungi cabang kami terdekat!",
    url: "https://tokodafa.com",
    siteName: "Toko Dafa",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Toko Dafa - Toko Kelontong, Cetak Kaos, Mesin Kasir & Website Bisnis",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko Dafa - Solusi Lengkap Bisnis Anda",
    description:
      "Toko kelontong, cetak kaos DTF/DTG, mesin kasir UMKM, dan website bisnis profesional. Hubungi kami sekarang!",
    images: ["/og-image-home.jpg"],
  },
  alternates: {
    canonical: "https://tokodafa.com",
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

export default function Home() {
  return (
    <div className="dark min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <PcAssembly />
      <ApparelService />
      <RetailProducts />
      {/* <RetailSembako /> */}

        <HeroCabang />
        <Features />
        <BranchGrid />
        <FooterCTA />


      <CtaSection />
      <Footer />
    </div>
  )
}
