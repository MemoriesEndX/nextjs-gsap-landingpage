"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Laptop, Layers, Boxes, ArrowRight } from "lucide-react";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "Company Profile Website",
    description: "Website profesional untuk memperkenalkan perusahaan, produk, dan layanan Anda kepada calon klien dengan desain modern dan informatif.",
    icon: Globe,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    image: "/post/website/company-profile.jpg",
  },
  {
    id: 2,
    title: "Business Website",
    description: "Platform digital untuk bisnis Anda dengan fitur lengkap seperti katalog produk, form kontak, integrasi payment, dan dashboard admin.",
    icon: Laptop,
    features: ["E-Commerce Ready", "Payment Integration", "Admin Dashboard", "Analytics"],
    image: "/post/website/business-web.jpg",
  },
  {
    id: 3,
    title: "Custom Web App",
    description: "Aplikasi web custom sesuai kebutuhan bisnis spesifik Anda. Dari sistem manajemen hingga aplikasi internal perusahaan.",
    icon: Layers,
    features: ["Custom Features", "Database Design", "API Integration", "User Management"],
    image: "/post/website/custom-app.jpg",
  },
  {
    id: 4,
    title: "Super App (Multi Feature System)",
    description: "Sistem web kompleks dengan berbagai modul terintegrasi dalam satu platform. Cocok untuk startup dan enterprise yang membutuhkan solusi all-in-one.",
    icon: Boxes,
    features: ["Multi Module", "Scalable Architecture", "Real-time Features", "Advanced Security"],
    image: "/post/website/super-app.jpg",
  },
];

export default function Services() {
  const handleContactService = (serviceName: string) => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan layanan ${serviceName}`);
    window.open(`https://wa.me/6282213580380?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solusi Website untuk Setiap Kebutuhan Bisnis
          </h2>
          <p className="text-lg text-neutral-400">
            Kami menyediakan berbagai layanan pembuatan website yang disesuaikan dengan kompleksitas dan kebutuhan bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 border-2 border-neutral-800 hover:border-orange-500/30 overflow-hidden bg-neutral-950"
              >
                {/* Service Icon & Badge */}
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-600 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <Badge variant="outline" className="text-orange-400 border-orange-500/30 bg-orange-500/10">
                      Custom Pricing
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl mb-2 text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-neutral-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-neutral-400">
                        <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Info */}
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 mb-4">
                    <p className="text-sm text-neutral-400 text-center">
                      <span className="font-semibold text-white">Harga: </span>
                      Berdasarkan kompleksitas & fitur yang dibutuhkan
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group/btn bg-orange-600 hover:bg-orange-700"
                    onClick={() => handleContactService(service.title)}
                  >
                    Konsultasi Sekarang
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="bg-neutral-800/50 border border-orange-500/20 rounded-xl p-6">
            <p className="text-neutral-300 leading-relaxed">
              💡 <span className="font-semibold text-orange-400">Setiap project unik</span> — Kami akan menganalisa kebutuhan Anda dan memberikan estimasi harga yang transparan dan kompetitif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
