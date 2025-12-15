"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DollarSign, Package, Users, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: DollarSign,
    title: "Harga Terjangkau",
    description: "Harga kompetitif untuk kebutuhan harian Anda",
  },
  {
    icon: Package,
    title: "Produk Lengkap",
    description: "Berbagai produk sembako dan kebutuhan rumah tangga",
  },
  {
    icon: Users,
    title: "Pelayanan Ramah",
    description: "Tim yang siap membantu dengan senyuman",
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description: "Mudah dijangkau dari berbagai area",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current?.children;
      if (items) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: itemsRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6 bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={itemsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/30 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
