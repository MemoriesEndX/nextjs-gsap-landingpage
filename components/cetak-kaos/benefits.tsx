"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, Palette, Zap, Users, Shield, Clock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cetak-benefits-title", {
        scrollTrigger: {
          trigger: ".cetak-benefits-title",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".cetak-benefit-card", {
        scrollTrigger: {
          trigger: ".cetak-benefit-card",
          start: "top 80%",
        },
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        clearProps: "all"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const benefits = [
    {
      icon: Award,
      title: "Kualitas Premium",
      description: "Hasil cetak dengan kualitas terbaik, detail tajam, dan warna yang akurat",
    },
    {
      icon: Palette,
      title: "Warna Tahan Lama",
      description: "Tinta berkualitas tinggi yang tidak mudah pudar meski dicuci berkali-kali",
    },
    {
      icon: Zap,
      title: "Proses Cepat",
      description: "Pengerjaan efisien dengan hasil maksimal, siap dalam waktu singkat",
    },
    {
      icon: Users,
      title: "Cocok untuk Semua",
      description: "Ideal untuk UMKM, event, komunitas, brand clothing, hingga kebutuhan personal",
    },
    {
      icon: Shield,
      title: "Garansi Kualitas",
      description: "Jaminan hasil cetak berkualitas atau uang kembali 100%",
    },
    {
      icon: Clock,
      title: "Satuan & Partai",
      description: "Terima pesanan mulai dari 1 pcs hingga ribuan pcs dengan harga kompetitif",
    },
  ]

  return (
    <section ref={containerRef} className="bg-neutral-950 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Keunggulan Kami</span>
          </div>
          <h2 className="cetak-benefits-title text-4xl lg:text-5xl font-bold text-white mb-4">
            Mengapa Pilih Layanan Kami?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Kepercayaan pelanggan adalah prioritas kami. Inilah yang membuat kami berbeda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="cetak-benefit-card bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-600 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-neutral-200 text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
