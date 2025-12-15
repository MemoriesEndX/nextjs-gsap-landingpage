"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CabangSectionProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  reverse?: boolean; // false = image kiri, true = image kanan
}

export default function CabangSection({
  title,
  description,
  imagePath,
  imageAlt,
  reverse = false,
}: CabangSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi untuk Image
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
      });

      // Animasi untuk Text (dari kiri atau kanan tergantung layout)
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: reverse ? -60 : 60,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, [reverse]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 bg-white dark:bg-slate-800"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
            reverse ? "md:grid-flow-dense" : ""
          }`}
        >
          {/* Image Container */}
          <div
            ref={imageRef}
            className={`${reverse ? "md:col-start-2" : ""} relative`}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={imagePath}
                alt={imageAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            ref={textRef}
            className={`${reverse ? "md:col-start-1 md:row-start-1" : ""}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
