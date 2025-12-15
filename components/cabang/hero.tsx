"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MapPin, Store } from "lucide-react";

export default function HeroCabang() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 1,
          },
          "-=0.3"
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] flex items-center justify-center px-6 pt-40 pb-24 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-[120px]" />

      <div className="container mx-auto text-center max-w-5xl relative z-10 space-y-8">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 backdrop-blur-lg border border-orange-500/20">
          <Store className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-orange-400">Toko & Cabang Kami</span>
        </div>

        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
        >
          Kualitas dan Kepuasan <br className="hidden md:block" />di Setiap Pembelian
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          Toko kelontong modern & terpercaya. Kami hadir di berbagai lokasi strategis untuk melayani kebutuhan sehari-hari Anda.
        </p>
      </div>
    </section>
  );
}
