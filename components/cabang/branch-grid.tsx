"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BranchCard from "./branch-card";

gsap.registerPlugin(ScrollTrigger);

interface Branch {
  id: number;
  name: string;
  address: string;
  status: "active" | "coming-soon";
  imagePath: string;
  phone?: string;
  hours?: string;
  mapsUrl?: string;
  googleRating?: number;
}

const branches: Branch[] = [
  {
    id: 1,
    name: "Toko Dafa - Cabang Utama",
    address: "JL. Raya Pendeglang No.Km. 12, Cibuah, Kec. Warunggunung, Kabupaten Lebak, Banten 42352",
    status: "active",
    imagePath: "/post/toko-cabang/TOKO UTAMA.jpeg",
    phone: "+62 822-1358-0380",
    hours: "08:00 - 21:00 WIB",
    mapsUrl: "https://maps.app.goo.gl/92JRh49AnMwbWarKg",
    googleRating: 4.7,
  },
  {
    id: 2,
    name: "Toko Dafa - Cabang 2",
    address: "JL. Raya Pendeglang No.Km. 12, Cibuan, Kec. Warunggunung, Kabupaten Lebak, Banten 42352",
    status: "active",
    imagePath: "/post/toko-cabang/TOKOCABANG.jpeg",
    phone: "+62 822-1358-0380",
    hours: "08:00 - 21:00 WIB",
    mapsUrl: "https://maps.app.goo.gl/92JRh49AnMwbWarKg",
    googleRating: 4.7,
  },
];

export default function BranchGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Stagger animation for cards
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3A6EA5 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Lokasi Cabang Kami
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Kunjungi salah satu cabang kami untuk pengalaman belanja yang lebih personal
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {branches.map((branch, index) => (
            <BranchCard
              key={branch.id}
              name={branch.name}
              address={branch.address}
              status={branch.status}
              imagePath={branch.imagePath}
              phone={branch.phone}
              hours={branch.hours}
              mapsUrl={branch.mapsUrl}
              googleRating={branch.googleRating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
