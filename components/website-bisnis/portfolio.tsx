"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Camera, Film, Palette, Code } from "lucide-react";
import Image from "next/image";

const portfolioData = [
  {
    id: 1,
    name: "Photobooth Web Application",
    description: "Aplikasi web photobooth interaktif dengan fitur real-time photo capture, filter effects, dan instant sharing.",
    category: "Web App",
    url: "https://photobooth-memoriesendxyz.online/",
    image: "/post/website/Photobooth 2.png",
    icon: Camera,
    tags: ["Real-time", "Interactive", "Photo Processing"],
  },
  {
    id: 2,
    name: "Films Portfolio Website Film",
    description: "Website portfolio untuk showcase karya videografi dan sinematografi dengan layout yang menarik dan modern.",
    category: "Portfolio",
    url: "https://memoriesendxmovies.blogspot.com/",
    image: "/post/website/preview-movie.png",
    icon: Film,
    tags: ["Portfolio", "Gallery", "Multimedia"],
  },
  {
    id: 3,
    name: "Marketing Communication Web",
    description: "Website untuk digital marketing dan komunikasi dengan desain profesional dan konten yang engaging.",
    category: "Company Profile",
    url: "https://memoriesendx.github.io/",
    image: "/post/website/marcom-me.png",
    icon: Palette,
    tags: ["Marketing", "Corporate", "Responsive"],
  },
  {
    id: 4,
    name: "Frontend Website Portfolio",
    description: "Portfolio website modern dengan UI/UX yang clean, showcase projects, dan optimasi performa tinggi.",
    category: "Portfolio",
    url: "https://cretivox-test-luminance.vercel.app/",
    image: "/post/website/frontend me.png",
    icon: Code,
    tags: ["Modern UI", "Fast Loading", "SEO"],
  },

  
  {
    id: 5,
    name: "Booking System Website",
    description:
      "Website sistem booking dengan alur pemesanan sederhana, manajemen jadwal, dan tampilan user-friendly.",
    category: "Web Development",
    price: "Rp0 - Rp799.000",
    image: "/post/website/Roombooking.webp",
    icon: Code,
    tags: ["Booking", "User Flow", "Responsive"],
  },
  {
    id: 6,
    name: "PLN UPDL Suralaya Asset Management System",
    description:
      "Sistem manajemen aset untuk PLN UPDL Suralaya dengan dashboard statistik, monitoring, dan data management.",
    category: "Enterprise System",
    price: "Rp0 - Rp5.600.000",
    image: "/post/website/AWESOME 3.png",
    icon: Code,
    url: "https://awesomepln.id/login",
    tags: ["Dashboard", "Asset Management", "Enterprise"],
  },
  {
    id: 7,
    name: "Satu Desa",
    description:
      "Aplikasi layanan desa terpadu yang menyediakan informasi desa, pengaduan warga, transparansi anggaran, dan statistik pembangunan.",
    category: "Web Application",
    price: "Custom (Based on Complexity)",
    image: "/post/website/SATUDESA.png",
    icon: Code,
    tags: ["Public Service", "Village System", "Dashboard"],
  },
  {
    id: 9,
    name: "Untirta Trends",
    description:
    "Web informasi interaktif yang menyajikan tren dan statistik terkini di Universitas Sultan Ageng Tirtayasa.",
    category: "Information System",
    price: "Custom (Based on Complexity)",
    image: "/post/website/UNTIRTA TRENDS.webp",
    icon: Code,
    tags: ["Data Visualization", "Statistics", "Campus"],
  },
  


  

];

export default function Portfolio() {
  const handleVisitWebsite = (url: string, name: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
            Portfolio Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Project yang Sudah Kami Kerjakan
          </h2>
          <p className="text-lg text-neutral-400">
            Lihat berbagai project website yang telah kami develop dan deploy untuk berbagai kebutuhan bisnis
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioData.map((project) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id} 
                className="group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden border-2 border-neutral-800 hover:border-orange-500/30 bg-neutral-900"
              >
                {/* Image Preview */}
                <div className="relative h-64 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
                  {/* Actual Image */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-10">
                    <Button 
                      variant="secondary" 
                      className="bg-white text-slate-900 hover:bg-slate-100"
                      onClick={() => handleVisitWebsite(project.url, project.name)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Kunjungi Website
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs bg-neutral-800 text-neutral-300 border-neutral-700">
                      {project.category}
                    </Badge>
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Icon className="h-5 w-5 text-orange-500" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-full border border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-500/30 text-orange-400 hover:bg-orange-500/10 group/btn bg-transparent"
                    onClick={() => handleVisitWebsite(project.url, project.name)}
                  >
                    Lihat Website
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-16">
          <div className="inline-block bg-neutral-900 border-2 border-orange-500/30 rounded-xl p-8 max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-3">
              Ingin Project Seperti Ini?
            </h3>
            <p className="text-neutral-400 mb-6">
              Konsultasikan kebutuhan website Anda dengan tim kami dan wujudkan project impian Anda
            </p>
            <Button 
              size="lg"
              className="bg-orange-600 hover:bg-orange-700"
              onClick={() => window.open("https://wa.me/6281234567890?text=Halo, saya tertarik untuk membuat project website", "_blank")}
            >
              Mulai Project Anda
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
