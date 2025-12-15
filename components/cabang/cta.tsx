"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MapPin, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FooterCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        buttonsRef.current?.children || [],
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ctaRef}
      className="relative py-28 md:py-36 px-6 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-12">
        <div ref={contentRef} className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Toko Dafa, Dekat dengan <br className="hidden md:block" />
            Kebutuhan Anda
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Kunjungi cabang terdekat atau hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+6282213580380"
            className="group flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-orange-500/40 transition-all hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5" />
            <span>Hubungi Kami</span>
          </a>
          
          <a
            href="https://maps.app.goo.gl/92JRh49AnMwbWarKg"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-neutral-800/80 backdrop-blur-lg border border-neutral-700 hover:border-orange-500/50 text-white font-semibold rounded-lg shadow-xl transition-all hover:scale-[1.02]"
          >
            <MapPin className="w-5 h-5" />
            <span>Lihat Lokasi</span>
          </a>
        </div>
      </div>
    </section>
  );
}
