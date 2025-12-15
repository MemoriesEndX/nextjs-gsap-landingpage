import type { Metadata } from "next"
import Navbar from "@/components/navbar";
import HeroCabang from "@/components/cabang/hero";
import Features from "@/components/cabang/features";
import BranchGrid from "@/components/cabang/branch-grid";
import FooterCTA from "@/components/cabang/cta";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Lokasi Cabang Toko Dafa - Toko Kelontong Terdekat di Kota Anda",
  description:
    "Temukan lokasi cabang Toko Dafa terdekat di kota Anda. Produk kelontong lengkap, harga bersaing, pelayanan ramah. Buka setiap hari untuk memenuhi kebutuhan harian Anda. Cek alamat, jam buka, dan kontak setiap cabang.",
  keywords: [
    "toko kelontong terdekat",
    "cabang toko dafa",
    "lokasi toko dafa",
    "toko sembako terdekat",
    "alamat toko dafa",
    "jam buka toko kelontong",
    "toko kelontong 24 jam",
    "toko dafa dekat saya",
    "yoko kelontong",
  ],
  openGraph: {
    title: "Lokasi Cabang Toko Dafa - Toko Kelontong Terdekat",
    description:
      "Kunjungi cabang Toko Dafa terdekat untuk belanja produk kelontong berkualitas dengan harga terjangkau. Tersedia di berbagai lokasi untuk kemudahan Anda.",
    url: "https://tokodafa.com/toko-cabang",
    siteName: "Toko Dafa",
    images: [
      {
        url: "/og-image-cabang.jpg",
        width: 1200,
        height: 630,
        alt: "Cabang Toko Dafa - Toko Kelontong Terdekat",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokasi Cabang Toko Dafa - Toko Kelontong Terdekat",
    description:
      "Temukan cabang Toko Dafa terdekat. Produk lengkap, harga bersaing, pelayanan terbaik.",
    images: ["/og-image-cabang.jpg"],
  },
  alternates: {
    canonical: "https://tokodafa.com/toko-cabang",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function TokoCabangPage() {
  return (
    <div className="dark min-h-screen bg-neutral-950">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroCabang />

        {/* Features Section */}
        <Features />

        {/* Branch Cards Grid */}
        <BranchGrid />

        {/* CTA Section */}
        <FooterCTA />
      </main>

      <Footer />
    </div>
  );
}
