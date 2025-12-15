"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  TrendingUp, 
  Palette, 
  Search, 
  HeadphonesIcon,
  CheckCircle2 
} from "lucide-react";

const advantages = [
  {
    icon: Sparkles,
    title: "Custom Sesuai Kebutuhan",
    description: "Kami tidak menggunakan template. Setiap project dikembangkan dari nol sesuai kebutuhan spesifik bisnis Anda.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Modular System",
    description: "Arsitektur sistem yang dapat berkembang seiring pertumbuhan bisnis. Mudah ditambah fitur baru di masa depan.",
    color: "green",
  },
  {
    icon: Palette,
    title: "UI/UX Modern & Profesional",
    description: "Desain yang menarik, intuitif, dan mengikuti best practice modern web design untuk pengalaman pengguna terbaik.",
    color: "purple",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    description: "Website dioptimasi untuk mesin pencari dengan struktur kode yang clean, fast loading, dan mobile responsive.",
    color: "orange",
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Dukungan teknis berkelanjutan untuk memastikan website Anda berjalan lancar dan selalu up-to-date.",
    color: "indigo",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Testing menyeluruh sebelum deployment untuk memastikan semua fitur berfungsi dengan baik tanpa bug.",
    color: "teal",
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: "bg-orange-500/10", icon: "text-orange-500", border: "border-orange-500/30" },
    green: { bg: "bg-orange-500/10", icon: "text-orange-500", border: "border-orange-500/30" },
    purple: { bg: "bg-orange-500/10", icon: "text-orange-500", border: "border-orange-500/30" },
    orange: { bg: "bg-orange-500/10", icon: "text-orange-500", border: "border-orange-500/30" },
    indigo: { bg: "bg-orange-500/10", icon: "text-orange-500", border: "border-orange-500/30" },
    teal: { bg: "bg-orange-500/10", icon: "text-orange-500", border: "border-orange-500/30" },
  };
  return colorMap[color] || colorMap.blue;
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
            Mengapa Memilih Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Keunggulan Layanan Kami
          </h2>
          <p className="text-lg text-neutral-400">
            Kami berkomitmen memberikan solusi digital terbaik dengan standar kualitas tinggi dan profesional
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);
            
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 border-2 border-neutral-800 hover:${colors.border} bg-neutral-950`}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`inline-flex p-3 ${colors.bg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-sm text-neutral-400">Custom Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-sm text-neutral-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Fast</div>
              <div className="text-sm text-neutral-400">Loading Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">SEO</div>
              <div className="text-sm text-neutral-400">Optimized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
