"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, Monitor, Gamepad2, Briefcase } from "lucide-react"
import { Card } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

export default function PcAssembly() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pc-title", {
        scrollTrigger: {
          trigger: ".pc-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
      })

      gsap.from(".pc-feature", {
        scrollTrigger: {
          trigger: ".pc-feature",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      })

      gsap.from(".pc-illustration", {
        scrollTrigger: {
          trigger: ".pc-illustration",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

const features = [
  "Pemilihan komponen sesuai kebutuhan",
  "Manajemen kabel profesional & rapi",
  "Uji performa & benchmarking",
  "Garansi & dukungan teknis",
  "Dukungan mesin kasir (POS) & perangkat toko",
  "Instalasi software kasir & sistem penjualan",
  "Integrasi printer struk & barcode scanner",
];

const useCases = [
  {
    icon: Gamepad2,
    title: "Gaming",
    desc: "PC berperforma tinggi untuk gaming kompetitif",
  },
  {
    icon: Briefcase,
    title: "Workstation",
    desc: "Komputasi profesional untuk desain & produksi",
  },
  {
    icon: Monitor,
    title: "Office & Toko",
    desc: "Produktivitas kantor & sistem kasir usaha",
  },
];


  return (
    <section ref={containerRef} className="bg-neutral-900 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <span className="text-sm text-orange-400 font-medium">Custom PC Assembly</span>
              </div>
                <h2 className="pc-title text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Dirakit Sesuai Spesifikasi yang Anda Inginkan
                </h2>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  Mulai dari PC gaming berperforma tinggi hingga workstation profesional, kami merakit PC kustom sesuai kebutuhan Anda
                  dengan komponen premium dan pengerjaan yang berpengalaman.
                </p>

            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="pc-feature flex items-center gap-3 text-neutral-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-orange-500" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="pc-feature bg-neutral-800 border-neutral-700 p-4 text-center hover:border-orange-500/50 transition-colors"
                >
                  <useCase.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="font-semibold text-white text-sm">{useCase.title}</div>
                  <div className="text-xs text-neutral-500">{useCase.desc}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="pc-illustration relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* PC Case */}
              <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl border border-neutral-700 shadow-2xl overflow-hidden">
                {/* Glass panel */}
                <div className="absolute inset-4 border border-neutral-600 rounded-lg bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm">
                  {/* Components inside */}
                  <div className="absolute top-8 left-8 right-8 h-24 bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg shadow-lg shadow-orange-500/50">
                    <div className="absolute inset-2 border border-orange-400/30 rounded" />
                  </div>

                  <div className="absolute top-36 left-8 right-8 h-32 bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-lg">
                    <div className="flex gap-2 p-3">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex-1 h-24 bg-neutral-950/50 rounded border border-green-400/30" />
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-72 left-8 right-8 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg">
                    <div className="absolute inset-2 flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex-1 bg-blue-400/20 rounded" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Power button */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 animate-pulse" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-orange-500/20 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
