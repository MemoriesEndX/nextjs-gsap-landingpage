import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/website-bisnis/hero";
import Services from "@/components/website-bisnis/services";
import Portfolio from "@/components/website-bisnis/portfolio";
import WhyChooseUs from "@/components/website-bisnis/why-choose-us";
import Workflow from "@/components/website-bisnis/workflow";
import CTASection from "@/components/website-bisnis/cta";
import FAQ from "@/components/website-bisnis/faq";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Bisnis & Super App Custom - Profesional & SEO Friendly | Toko Dafa",
  description:
    "Jasa pembuatan website company profile, website bisnis, sistem informasi, e-commerce, dan super app custom. Teknologi modern (Next.js, React), responsive, SEO optimized, scalable, dan user-friendly. Solusi digital untuk bisnis, instansi pemerintah, startup, dan UMKM. Konsultasi gratis, harga kompetitif, garansi purna jual.",
  keywords: [
    "jasa pembuatan website bisnis",
    "jasa website company profile",
    "web development profesional",
    "super app indonesia",
    "aplikasi web custom",
    "jasa web developer",
    "website perusahaan",
    "website instansi pemerintah",
    "sistem informasi custom",
    "website e-commerce",
    "website toko online",
    "jasa website SEO friendly",
    "pembuatan website Next.js",
    "web development indonesia",
    "website startup",
    "website UMKM",
  ],
  authors: [{ name: "Toko Dafa" }],
  creator: "Toko Dafa",
  publisher: "Toko Dafa",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://tokodafa.com/website-bisnis",
    title: "Jasa Pembuatan Website Bisnis & Super App Custom | Toko Dafa",
    description:
      "Solusi digital custom untuk bisnis, instansi, dan startup. Website modern dengan Next.js, scalable, SEO friendly, dan responsive. Konsultasi gratis!",
    siteName: "Toko Dafa",
    images: [
      {
        url: "/og-image-website-bisnis.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Bisnis & Super App - Toko Dafa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Bisnis & Super App Custom",
    description:
      "Website modern, scalable, dan SEO friendly untuk bisnis, instansi, dan startup. Teknologi Next.js. Konsultasi gratis!",
    images: ["/og-image-website-bisnis.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tokodafa.com/website-bisnis",
  },
  category: "Web Development Services",
};

export default function WebsiteBisnisPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Workflow Section */}
        <Workflow />

        {/* CTA Section */}
        <CTASection />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
