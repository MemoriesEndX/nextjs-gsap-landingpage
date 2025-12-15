"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles, Zap, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

export default function ApparelService() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".apparel-title", {
        scrollTrigger: {
          trigger: ".apparel-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
      })

      gsap.from(".apparel-card", {
        scrollTrigger: {
          trigger: ".apparel-card",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      })

      gsap.from(".tshirt-illustration", {
        scrollTrigger: {
          trigger: ".tshirt-illustration",
          start: "top 80%",
        },
        scale: 0.8,
        rotation: -10,
        opacity: 0,
        duration: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

const features = [
  {
    icon: Sparkles,
    title: "Kualitas Tinggi",
    desc: "Hasil cetak premium yang awet dan tahan lama",
  },
  {
    icon: Zap,
    title: "Proses Cepat",
    desc: "Waktu pengerjaan cepat dan tepat waktu",
  },
  {
    icon: Palette,
    title: "Desain Kustom",
    desc: "Visi Anda, keahlian kami",
  },
];


  return (
    <section ref={containerRef} className="bg-neutral-950 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="tshirt-illustration relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* T-shirt */}
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Body */}
                <path
                  d="M 100 120 Q 100 100 120 100 L 160 100 L 160 80 Q 160 60 180 60 L 220 60 Q 240 60 240 80 L 240 100 L 280 100 Q 300 100 300 120 L 320 160 L 300 160 L 300 360 Q 300 380 280 380 L 120 380 Q 100 380 100 360 L 100 160 L 80 160 Z"
                  fill="url(#tshirtGradient)"
                  stroke="#ea580c"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="tshirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                  </linearGradient>
                </defs>

                {/* Design on shirt - abstract pattern */}
                <circle cx="200" cy="220" r="60" fill="#ea580c" opacity="0.3" />
                <circle cx="200" cy="220" r="40" fill="#ea580c" opacity="0.5" />
                <circle cx="200" cy="220" r="20" fill="#ea580c" opacity="0.8" />
                <text
                  x="200"
                  y="230"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                  className="font-sans"
                >
                  CUSTOM
                </text>
              </svg>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-orange-500/20 blur-3xl -z-10" />

              {/* Floating DTF/DTG badges */}
              <div className="absolute top-0 right-0 px-4 py-2 bg-orange-600 text-white text-sm font-bold rounded-lg shadow-lg animate-float">
                DTF
              </div>
              <div
                className="absolute bottom-20 left-0 px-4 py-2 bg-orange-600 text-white text-sm font-bold rounded-lg shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                DTG
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <span className="text-sm text-orange-400 font-medium">Custom Apparel Printing</span>
              </div>
                  <h2 className="apparel-title text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Wujudkan Desain Anda Menjadi Nyata
                  </h2>
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    Layanan cetak profesional DTF (Direct to Film) dan DTG (Direct to Garment) untuk pakaian kustom.
                    Cocok untuk kebutuhan bisnis, event, komunitas, maupun ekspresi personal Anda.
                  </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="apparel-card bg-neutral-900 border-neutral-800 p-6 hover:border-orange-500/50 transition-all hover:scale-105"
                >
                  <feature.icon className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.desc}</p>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h4 className="text-white font-semibold mb-2">Printing Technologies</h4>
                <div className="space-y-2 text-neutral-400 text-sm">
                  <p>
                    <strong className="text-orange-500">DTF:</strong> Versatile, vibrant colors on any fabric
                  </p>
                  <p>
                    <strong className="text-orange-500">DTG:</strong> Photo-quality prints on cotton garments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
