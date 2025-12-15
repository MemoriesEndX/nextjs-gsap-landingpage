"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Film, Shirt, Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cetak-services-title", {
        scrollTrigger: {
          trigger: ".cetak-services-title",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".cetak-service-card", {
        scrollTrigger: {
          trigger: ".cetak-service-card",
          start: "top 80%",
        },
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        clearProps: "all"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: Film,
      title: "DTF (Direct to Film)",
      description:
        "Teknologi cetak transfer film dengan hasil detail tinggi dan warna yang vibrant. Cocok untuk desain kompleks dengan banyak warna.",
      benefits: [
        "Hasil cetak sangat detail dan tajam",
        "Tahan lama dan tidak mudah pudar",
        "Cocok untuk semua jenis bahan kain",
        "Warna lebih cerah dan vibrant",
        "Proses lebih cepat untuk jumlah banyak",
      ],
    },
    {
      icon: Shirt,
      title: "DTG (Direct to Garment)",
      description:
        "Metode cetak langsung ke kain menggunakan printer khusus. Ideal untuk desain foto-realistik dan gradasi warna halus.",
      benefits: [
        "Hasil seperti foto asli",
        "Tidak terasa tebal di kain",
        "Gradasi warna sangat halus",
        "Ramah lingkungan (water-based ink)",
        "Cocok untuk satuan dan custom design",
      ],
    },
  ]

  return (
    <section ref={containerRef} className="bg-neutral-950 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Jenis Layanan</span>
          </div>
          <h2 className="cetak-services-title text-4xl lg:text-5xl font-bold text-white mb-4">
            Metode Cetak Profesional
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Dua teknologi cetak terbaik untuk hasil maksimal sesuai kebutuhan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="cetak-service-card bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-600 rounded-xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>

              <p className="text-neutral-200 mb-6 leading-relaxed text-base">{service.description}</p>

              <div className="space-y-3 bg-neutral-950/50 rounded-lg p-4">
                <p className="text-base font-bold text-orange-400 mb-4">Keunggulan:</p>
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200 text-base leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
