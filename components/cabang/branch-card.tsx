"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

interface BranchCardProps {
  name: string;
  address: string;
  status: "active" | "coming-soon";
  imagePath: string;
  phone?: string;
  hours?: string;
  mapsUrl?: string;
  googleRating?: number;
  index?: number;
}

export default function BranchCard({
  name,
  address,
  status,
  imagePath,
  phone,
  hours,
  mapsUrl,
  googleRating,
  index = 0,
}: BranchCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hover animations
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        y: -8,
        boxShadow: "0 20px 40px rgba(255, 107, 53, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-xl overflow-hidden bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 shadow-lg hover:border-orange-500/40 transition-colors duration-300"
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        {status === "active" ? (
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-xs font-medium text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Active
          </span>
        ) : (
          <span className="px-3 py-1.5 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-xs font-medium text-orange-400">
            Coming Soon
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0F1419]">
        <Image
          src={imagePath}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A36] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Title & Rating */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          {googleRating && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">★</span>
              <span className="text-white font-medium">{googleRating}</span>
              <span className="text-neutral-400">• Google Rating</span>
            </div>
          )}
        </div>

        {/* Address */}
        <div className="flex items-start gap-3 text-neutral-400">
          <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm leading-relaxed">{address}</p>
        </div>

        {/* Hours */}
        {hours && (
          <div className="flex items-center gap-3 text-neutral-400">
            <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <p className="text-sm">{hours}</p>
          </div>
        )}

        {/* Phone */}
        {phone && (
          <div className="flex items-center gap-3 text-neutral-400">
            <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <a
              href={`tel:${phone}`}
              className="text-sm hover:text-orange-400 transition-colors"
            >
              {phone}
            </a>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-2">
          {mapsUrl && status === "active" && (
            <>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all hover:scale-[1.02]"
              >
                <MapPin className="w-4 h-4" />
                Lihat Lokasi
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition-all border border-neutral-700"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </>
          )}
          {status === "coming-soon" && (
            <button
              disabled
              className="flex-1 px-4 py-3 rounded-lg bg-neutral-800/50 text-neutral-500 font-medium text-sm cursor-not-allowed border border-neutral-800"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-[#3A6EA5]/10" />
      </div>
    </div>
  );
}
