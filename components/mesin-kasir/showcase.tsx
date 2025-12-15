"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Wifi, Printer, Speaker, Package } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function MesinKasirShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".showcase-title", {
        scrollTrigger: {
          trigger: ".showcase-title",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".showcase-image", {
        scrollTrigger: {
          trigger: ".showcase-image",
          start: "top 80%",
        },
        scale: 0.8,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all"
      })

      gsap.from(".showcase-badge", {
        scrollTrigger: {
          trigger: ".showcase-badge",
          start: "top 80%",
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        clearProps: "all"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const bonusItems = [
    { icon: Speaker, label: "Speaker Premium", color: "text-blue-400" },
    { icon: Package, label: "Rak Kertas", color: "text-green-400" },
    { icon: Printer, label: "Printer Thermal", color: "text-purple-400" },
    { icon: Wifi, label: "WiFi USB", color: "text-orange-400" },
  ]

  return (
    <section ref={containerRef} className="bg-neutral-900 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="showcase-title inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Paket Lengkap</span>
          </div>
          <h2 className="showcase-title text-4xl lg:text-5xl font-bold text-white mb-4">
            Mesin Kasir Siap Pakai
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Dapatkan paket mesin kasir lengkap dengan berbagai bonus menarik
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-neutral-800 border-neutral-700 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative p-8 bg-gradient-to-br from-neutral-800 to-neutral-900">
                <div className="showcase-image relative aspect-square rounded-xl overflow-hidden bg-neutral-900/50 border border-neutral-700">
                  <img
                    src="/post/mesinkasir1.png"
                    alt="Paket Mesin Kasir"
                    className="w-full h-full object-contain p-4"
                  />
                  {/* PROMO Badge on Image */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-sm font-bold border-0 shadow-lg">
                      PROMO!!!
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Highlights & Bonus */}
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Main Highlight */}
                  <div className="showcase-badge">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                      <Gift className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">BONUS LENGKAP!</h3>
                        <p className="text-neutral-300 text-sm">
                          Dapatkan bonus eksklusif untuk meningkatkan produktivitas kasir Anda
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bonus Items Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {bonusItems.map((item, index) => (
                      <div
                        key={index}
                        className="showcase-badge p-4 rounded-lg bg-neutral-900/50 border border-neutral-700 hover:border-orange-500/50 transition-colors duration-300"
                      >
                        <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Database Highlight */}
                  <div className="showcase-badge">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Package className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">Free Database</h4>
                          <p className="text-2xl font-bold text-green-400">50.000+ Produk</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="showcase-badge pt-4 border-t border-neutral-700">
                    <p className="text-sm text-neutral-400">
                      ✓ Garansi resmi
                      <br />
                      ✓ Instalasi & training gratis
                      <br />
                      ✓ Support teknis selamanya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
