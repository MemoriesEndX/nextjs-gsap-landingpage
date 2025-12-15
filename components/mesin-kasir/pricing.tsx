"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check, Sparkles, Phone } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface PricingPackage {
  name: string
  printer: string
  price: string
  originalPrice?: string
  discount?: string
  features: string[]
  popular?: boolean
  badge?: string
}

export default function MesinKasirPricing() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pricing-title", {
        scrollTrigger: {
          trigger: ".pricing-title",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-card",
          start: "top 80%",
        },
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        clearProps: "all"
      })

      gsap.from(".custom-package", {
        scrollTrigger: {
          trigger: ".custom-package",
          start: "top 80%",
        },
        scale: 0.95,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const packages: PricingPackage[] = [
    {
      name: "Paket Promo",
      printer: "Printer 58mm",
      price: "Rp 1.980.000",
      originalPrice: "Rp 2.500.000",
      discount: "Hemat 20%",
      badge: "Best Seller",
      popular: true,
      features: [
        "Komputer Intel Core i3",
        "RAM 4GB + SSD 128GB",
        "LCD Monitor 16 Inch",
        "Printer Thermal 58mm (BARU)",
        "Barcode Scanner + Dudukan",
        "WiFi Receiver",
        "Keyboard & Mouse USB",
        "Program iPOS 4 + Database 50.000+ Produk",
        "Bonus: Speaker + Rak Kertas + WiFi USB",
        "Garansi 1 Tahun",
        "Free Instalasi & Training",
      ],
    },
    {
      name: "Paket Premium",
      printer: "Printer 80mm",
      price: "Rp 2.340.000",
      originalPrice: "Rp 2.900.000",
      discount: "Hemat 19%",
      badge: "Most Popular",
      popular: true,
      features: [
        "Komputer Intel Core i3",
        "RAM 4GB + SSD 128GB",
        "LCD Monitor 16 Inch",
        "Printer Thermal 80mm (BARU)",
        "Barcode Scanner + Dudukan",
        "WiFi Receiver",
        "Keyboard & Mouse USB",
        "Program iPOS 4 + Database 50.000+ Produk",
        "Bonus: Speaker + Rak Kertas + WiFi USB",
        "Garansi 1 Tahun",
        "Free Instalasi & Training",
      ],
    },
  ]

  const handleWhatsAppOrder = (packageName: string) => {
    const message = `Halo, saya tertarik dengan ${packageName}. Mohon informasi lebih lanjut.`
    window.open(`https://wa.me/6282213580380?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleWhatsAppConsult = () => {
    window.open("https://wa.me/6282213580380?text=Halo,%20saya%20ingin%20konsultasi%20paket%20kasir%20kustom", "_blank")
  }

  return (
    <section id="pricing-section" ref={containerRef} className="bg-neutral-900 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="pricing-title inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Paket Harga</span>
          </div>
          <h2 className="pricing-title text-4xl lg:text-5xl font-bold text-white mb-4">
            Pilih Paket Yang Sesuai
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Dapatkan paket mesin kasir terbaik dengan harga spesial dan bonus melimpah
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`pricing-card relative bg-neutral-800 border-2 overflow-hidden group hover:scale-105 transition-transform duration-300 ${
                pkg.popular ? "border-orange-500" : "border-neutral-700"
              }`}
            >
              {/* Popular Badge */}
              {pkg.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-bold border-0">
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              {/* Gradient Overlay */}
              {pkg.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
              )}

              <div className="p-8 relative">
                {/* Package Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-orange-400 font-medium">{pkg.printer}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {pkg.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-neutral-500 line-through">{pkg.originalPrice}</span>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                        {pkg.discount}
                      </Badge>
                    </div>
                  )}
                  <div className="text-4xl font-bold text-white">{pkg.price}</div>
                  <p className="text-sm text-neutral-400 mt-1">Harga promo terbatas</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-orange-500" />
                      </div>
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleWhatsAppOrder(pkg.name)}
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600"
                      : "bg-neutral-700 hover:bg-neutral-600"
                  } text-white font-semibold py-6 text-lg transition-all duration-300`}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Package Section */}
        <div className="custom-package max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 border-neutral-700 overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Butuh Paket Custom?
              </h3>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Kami dapat menyesuaikan spesifikasi dan komponen sesuai dengan kebutuhan bisnis Anda.
                Konsultasi gratis dengan tim kami untuk mendapatkan solusi terbaik!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleWhatsAppConsult}
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold px-8 py-6 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>

                <div className="text-neutral-400">
                  <p className="text-sm">Atau hubungi langsung:</p>
                  <p className="text-lg font-bold text-orange-400">0822-1358-0380</p>
                </div>
              </div>

              {/* Additional Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                  <p className="text-sm text-neutral-400">UMKM Terpuaskan</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                  <p className="text-sm text-neutral-400">Support Teknis</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">1 Tahun</div>
                  <p className="text-sm text-neutral-400">Garansi Resmi</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
