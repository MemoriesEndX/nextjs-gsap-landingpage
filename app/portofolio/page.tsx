import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio/portfolio";
import Services from "@/components/portfolio/services";
import Workflow from "@/components/portfolio/workflow";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Dafa Rizqy - Full-Stack Web Developer | Creative Technologist Portfolio",
  description:
    "Portfolio of Dafa Rizqy, Full-Stack Web Developer specializing in Next.js, Laravel, Photobooth Systems, and Creative Web Solutions. Explore featured projects including Photobooth Memories EndX, Room Reservation Systems, and Enterprise Asset Management.",
  keywords: [
    "Dafa Rizqy",
    "Full-Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "Laravel Developer",
    "Photobooth System",
    "Creative Technologist",
    "UI/UX Designer",
    "Web Development Indonesia",
    "React Developer",
    "TypeScript Developer",
    "Progressive Web App",
  ],
  authors: [{ name: "Dafa Rizqy" }],
  creator: "Dafa Rizqy",
  publisher: "Dafa Rizqy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tokodafa.com/portofolio",
    title: "Dafa Rizqy - Full-Stack Web Developer Portfolio",
    description:
      "Full-Stack Web Developer specializing in modern web technologies. Building scalable applications with Next.js, Laravel, and creative digital solutions.",
    siteName: "Dafa Rizqy Portfolio",
    images: [
      {
        url: "/og-portfolio-dafa.jpg",
        width: 1200,
        height: 630,
        alt: "Dafa Rizqy - Full-Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dafa Rizqy - Full-Stack Web Developer",
    description: "Creative Technologist building modern web solutions with Next.js, Laravel, and innovative digital experiences.",
    images: ["/og-portfolio-dafa.jpg"],
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
};

export default function PortofolioPage() {
  return (
    <main className="min-h-screen bg-neutral-950">

      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/20 bg-orange-500/10 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-orange-400">Available for Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dafa Rizqy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Full-Stack Web Developer
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Creative Technologist specializing in modern web development, interactive, 
              and innovative digital solutions. Transforming ideas into scalable, user-centric applications.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Next.js & React Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Laravel & PHP Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>UI/UX Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Services Section */}
      <Services />

      {/* Workflow Section */}
      <Workflow />

      <Footer />
    </main>
  );
}
