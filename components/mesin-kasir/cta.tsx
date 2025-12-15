"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageCircle, Clock, MapPin, Mail } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function MesinKasirCTA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-title", {
        scrollTrigger: {
          trigger: ".cta-title",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".cta-card", {
        scrollTrigger: {
          trigger: ".cta-card",
          start: "top 80%",
        },
        scale: 0.95,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: ".contact-item",
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

  const handleWhatsApp = () => {
    window.open("https://wa.me/6282213580380?text=Halo,%20saya%20tertarik%20dengan%20Promo%20Paket%20Mesin%20Kasir", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+6282213580380"
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon / WhatsApp",
      value: "0822-1358-0380",
      action: handleWhatsApp,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Senin - Sabtu: 09.00 - 17.00 WIB",
      subtitle: "Minggu & Libur: Closed",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Cilegon, Banten",
      subtitle: "Layanan ke seluruh Indonesia",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ]

  return (
    <section ref={containerRef} className="bg-neutral-950 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="cta-title inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Hubungi Kami</span>
          </div>
          <h2 className="cta-title text-4xl lg:text-5xl font-bold text-white mb-4">
            Siap Meningkatkan Bisnis Anda?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Tim kami siap membantu Anda mendapatkan solusi kasir terbaik untuk bisnis Anda
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <Card className="cta-card bg-gradient-to-r from-orange-600 to-orange-500 border-0 overflow-hidden mb-12">
            <div className="p-8 md:p-12 text-center relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Dapatkan Penawaran Terbaik Hari Ini!
                </h3>
                <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                  Promo terbatas! Hubungi kami sekarang untuk mendapatkan harga spesial dan bonus eksklusif
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-orange-600 font-bold px-10 py-7 text-lg shadow-xl"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Chat WhatsApp
                  </Button>

                  <Button
                    onClick={handleCall}
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white hover:bg-white/10 text-white font-bold px-10 py-7 text-lg bg-transparent"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Telepon Langsung
                  </Button>
                </div>

                {/* Phone Number Display */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-orange-100 mb-2">Hubungi Kami:</p>
                  <a 
                    href="tel:+6282213580380"
                    className="text-3xl md:text-4xl font-bold text-white hover:text-orange-100 transition-colors"
                  >
                    0822-1358-0380
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`contact-item bg-neutral-900 border ${info.borderColor} p-6 hover:bg-neutral-800 transition-all duration-300 ${
                  info.action ? "cursor-pointer" : ""
                }`}
                onClick={info.action}
              >
                <div className={`w-12 h-12 rounded-lg ${info.bgColor} flex items-center justify-center mb-4`}>
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                <p className={`font-medium ${info.color} mb-1`}>{info.value}</p>
                {info.subtitle && <p className="text-sm text-neutral-400">{info.subtitle}</p>}
              </Card>
            ))}
          </div>

          {/* FAQ / Additional Info */}
          <div className="contact-item mt-12 p-8 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Pertanyaan Umum</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Apakah ada biaya instalasi?</h4>
                <p className="text-sm text-neutral-300">Tidak, instalasi dan training sudah termasuk gratis dalam paket.</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Berapa lama garansi?</h4>
                <p className="text-sm text-neutral-300">Semua paket mendapat garansi resmi 1 tahun untuk hardware.</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Apakah bisa COD?</h4>
                <p className="text-sm text-neutral-300">Ya, untuk area Cilegon dan sekitarnya tersedia layanan COD.</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Apakah melayani luar kota?</h4>
                <p className="text-sm text-neutral-300">Ya, kami melayani pengiriman ke seluruh Indonesia via ekspedisi terpercaya.</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="contact-item grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">✓</div>
              <p className="text-sm text-neutral-400">Garansi Resmi</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">✓</div>
              <p className="text-sm text-neutral-400">Produk Original</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">✓</div>
              <p className="text-sm text-neutral-400">Free Training</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">✓</div>
              <p className="text-sm text-neutral-400">Support 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
