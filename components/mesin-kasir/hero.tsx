"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Phone, ArrowDown } from "lucide-react"

export default function MesinKasirHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        scale: 0,
        autoAlpha: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        clearProps: "all"
      })
      gsap.from(".hero-title", {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        clearProps: "all"
      })
      gsap.from(".hero-subtitle", {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        clearProps: "all"
      })
      gsap.from(".hero-cta", {
        y: 20,
        autoAlpha: 0,
        duration: 1,
        delay: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const scrollToPackages = () => {
    const pricingSection = document.getElementById("pricing-section")
    pricingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/6282213580380?text=Halo,%20saya%20tertarik%20dengan%20Promo%20Paket%20Mesin%20Kasir", "_blank")
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex items-center overflow-hidden pt-20"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,88,12,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,88,12,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* PROMO Badge */}
          <div className="hero-badge inline-block mb-6">
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border border-orange-400/30 shadow-lg shadow-orange-500/20">
              <span className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
                🔥 PROMO SPESIAL 🔥
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Promo Paket
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Mesin Kasir
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Solusi Kasir Hemat & Handal untuk Usaha Anda
          </p>

          <p className="hero-subtitle text-base md:text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
            Paket lengkap dengan bonus Speaker, Rak Kertas, Printer, WiFi USB, dan Gratis Database 50.000+ Produk
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="hero-cta w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-orange-500/30 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Sekarang
            </Button>
            <Button
              onClick={scrollToPackages}
              size="lg"
              variant="outline"
              className="hero-cta w-full sm:w-auto border-2 border-orange-500/50 hover:bg-orange-500/10 text-white font-semibold px-8 py-6 text-lg bg-transparent transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Lihat Paket
            </Button>
          </div>

          {/* Price Preview */}
          <div className="hero-cta mt-10 inline-block">
            <div className="px-6 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm">
              <p className="text-sm text-neutral-400 mb-1">Mulai dari</p>
              <p className="text-3xl font-bold text-orange-500">Rp 1.980.000</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hero-cta mt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
