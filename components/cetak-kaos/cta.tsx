"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/6282213580380?text=Halo, saya ingin konsultasi cetak kaos", "_blank")
  }

  return (
    <section ref={containerRef} className="bg-neutral-900 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="cta-content max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-400/20 blur-3xl -z-10" />
          
          <div className="bg-neutral-950 border border-orange-500/30 rounded-3xl p-12 lg:p-16">
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-sm text-orange-400 font-medium">Siap Memulai?</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Wujudkan Desain Kaos Impian Anda
            </h2>

            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan cetak kaos Anda dengan tim profesional kami. 
              Dapatkan penawaran terbaik dan hasil yang memuaskan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Hubungi via WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-neutral-400 text-sm mt-6">
              Respon cepat • Konsultasi gratis • Harga transparan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
