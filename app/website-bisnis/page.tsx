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
  title: "Jasa Pembuatan Website Bisnis & Super App | Custom & Profesional",
  description:
    "Jasa pembuatan website company profile, website bisnis, sistem informasi, dan super app. Sistem custom sesuai kebutuhan, scalable, modern, dan SEO friendly. Solusi digital untuk bisnis, instansi, dan startup.",
  keywords: [
    "website bisnis",
    "jasa pembuatan website",
    "company profile",
    "super app",
    "web development",
    "sistem informasi",
    "aplikasi web custom",
    "jasa web developer",
    "pembuatan website profesional",
    "website perusahaan",
    "website instansi",
    "web development indonesia",
  ],
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://yourdomain.com/website-bisnis",
    title: "Jasa Pembuatan Website Bisnis & Super App | Custom & Profesional",
    description:
      "Solusi digital custom untuk bisnis, instansi, dan startup. Website modern, scalable, dan SEO friendly.",
    siteName: "Your Company Name",
    images: [
      {
        url: "/og-image-website-bisnis.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Bisnis & Super App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Bisnis & Super App",
    description:
      "Solusi digital custom untuk bisnis, instansi, dan startup. Website modern, scalable, dan SEO friendly.",
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
    canonical: "https://yourdomain.com/website-bisnis",
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
