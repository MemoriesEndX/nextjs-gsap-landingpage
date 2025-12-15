"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.2,
        clearProps: "all"
      })

      gsap.from(".hero-title", {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        delay: 0.4,
        clearProps: "all"
      })

      gsap.from(".hero-desc", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.6,
        clearProps: "all"
      })

      gsap.from(".hero-cta", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.8,
        clearProps: "all"
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/6282213580380?text=Halo, saya ingin pesan cetak kaos", "_blank")
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-neutral-950 to-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,88,12,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-badge inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-sm text-orange-400 font-medium">Layanan Cetak Kaos Profesional</span>
          </div>

          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Layanan Cetak Kaos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              DTF & DTG Profesional
            </span>
          </h1>

          <p className="hero-desc text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Solusi cetak kaos berkualitas premium untuk kebutuhan bisnis, event, komunitas, dan personal. 
            Hasil tajam, warna tahan lama, dan pengerjaan cepat.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg group"
            >
              Pesan Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 hover:bg-neutral-800 text-white bg-transparent px-8 py-6 text-lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Harga
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent" />
    </section>
  )
}
