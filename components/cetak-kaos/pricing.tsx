"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cetak-pricing-title", {
        scrollTrigger: {
          trigger: ".cetak-pricing-title",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".cetak-pricing-card", {
        scrollTrigger: {
          trigger: ".cetak-pricing-card",
          start: "top 80%",
        },
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        clearProps: "all"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/6282213580380?text=Halo, saya ingin tanya harga cetak kaos", "_blank")
  }

  const pricingPlans = [
    {
      name: "DTF Custom Size",
      price: "6.000",
      unit: "/ cm²",
      description: "Cetak DTF dengan ukuran custom sesuai kebutuhan",
      features: [
        "Ukuran custom bebas",
        "Hasil cetak detail tinggi",
        "Warna tajam & tahan lama",
        "Cocok semua jenis kain",
        "Minimum order fleksibel",
      ],
      popular: false,
    },
    {
      name: "DTG A4 (Depan)",
      price: "50.000",
      unit: "/ pcs",
      description: "Cetak DTG ukuran A4 satu sisi depan",
      features: [
        "Ukuran cetak A4",
        "Cetak sisi depan",
        "Hasil foto-realistik",
        "Tidak tebal di kain",
        "Cocok untuk custom design",
      ],
      popular: true,
    },
    {
      name: "DTG Depan + Belakang",
      price: "85.000",
      unit: "/ pcs",
      description: "Cetak DTG full (depan dan belakang)",
      features: [
        "Cetak depan & belakang",
        "Ukuran hingga A4",
        "Kualitas premium",
        "Warna gradasi halus",
        "Paket hemat full print",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" ref={containerRef} className="bg-neutral-900 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Harga Terjangkau</span>
          </div>
          <h2 className="cetak-pricing-title text-4xl lg:text-5xl font-bold text-white mb-4">
            Paket Harga Cetak Kaos
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Harga kompetitif dengan kualitas terbaik untuk semua kebutuhan cetak kaos Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`cetak-pricing-card bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 rounded-xl p-8 relative hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 ${
                plan.popular ? "lg:scale-105 border-orange-500 shadow-2xl shadow-orange-500/40" : "border-neutral-600"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Paling Populer
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-200 text-base mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1 bg-neutral-950/50 rounded-lg py-4 px-2">
                  <span className="text-base text-neutral-300 font-medium">Mulai dari</span>
                  <span className="text-4xl font-bold text-orange-400">Rp {plan.price}</span>
                  <span className="text-neutral-300 font-medium">{plan.unit}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 bg-neutral-950/30 rounded-lg p-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200 text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleWhatsApp}
                className={`w-full ${
                  plan.popular
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-neutral-800 hover:bg-neutral-700"
                } text-white`}
              >
                Pesan Sekarang
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-400 text-sm">
            * Harga dapat berubah tergantung ukuran, jumlah pesanan, dan kompleksitas desain.
            <br />
            Hubungi kami untuk penawaran khusus partai besar.
          </p>
        </div>
      </div>
    </section>
  )
}
