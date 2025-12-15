"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { Cpu, Zap } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })
      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      })
      gsap.from(".hero-illustration", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex items-center overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 hero-title">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400">Technology & Creativity</span>
            </div>

            <h1 className="hero-title text-5xl lg:text-7xl font-bold text-white leading-tight">
              Perkuat Teknologi Anda.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Ekspresikan Gaya Anda.
              </span>
            </h1>

            <p className="hero-subtitle text-xl text-neutral-400 leading-relaxed max-w-2xl">
              Dari penjualan ritel komputer premium dan perakitan PC kustom, pencetakan pakaian DTF & DTG mutakhir, hingga retail sembako berkualitas dengan harga terjangkau—kami hadir untuk mewujudkan kebutuhan teknologi, kreatif, dan kebutuhan sehari-hari Anda dalam satu layanan terpadu.
            </p>

            <div className="flex flex-wrap gap-4 hero-cta">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B6282213580380&text=Halo+apakah+bisa+untuk+memesan%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6"
                >
                  Consult Now
                </Button>
              </a>

                <a
                  href="https://linktr.ee/tokodafa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neutral-700 hover:bg-neutral-800 text-white text-lg px-8 py-6 bg-transparent"
                  >
                    View Services
                  </Button>
                </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-800 hero-cta">
              <div>
                <div className="text-3xl font-bold text-white">16+</div>
                <div className="text-sm text-neutral-500">PCs Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-sm text-neutral-500">Products Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-neutral-500">Support</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hero-illustration relative">
            <div className="relative w-full aspect-square">
              {/* Central CPU */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center shadow-2xl shadow-orange-500/50 animate-pulse-slow">
                  <Cpu className="w-24 h-24 text-white" />
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 border-2 border-white rounded" />
                </div>
              </div>

              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                  <div className="w-8 h-1 bg-white rounded-full" />
                </div>
              </div>

              <div className="absolute inset-0 animate-spin-slow" style={{ animationDelay: "-5s" }}>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
              </div>

              <div className="absolute inset-0 animate-spin-reverse" style={{ animationDelay: "-2.5s" }}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg">
                  <div className="w-4 h-8 bg-white rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
