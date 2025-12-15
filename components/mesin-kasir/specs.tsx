"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Cpu, 
  HardDrive, 
  Wifi, 
  Monitor, 
  Scan, 
  Printer, 
  Keyboard, 
  Database,
  CheckCircle2 
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface SpecItem {
  icon: any
  title: string
  description: string
  badge?: string
}

export default function MesinKasirSpecs() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".specs-title", {
        scrollTrigger: {
          trigger: ".specs-title",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".spec-card", {
        scrollTrigger: {
          trigger: ".spec-card",
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

  const specifications: SpecItem[] = [
    {
      icon: Cpu,
      title: "Komputer Intel Core i3",
      description: "Performa tangguh untuk operasional kasir yang smooth dan cepat",
      badge: "Powerful"
    },
    {
      icon: HardDrive,
      title: "RAM 4GB + SSD 128GB / HDD",
      description: "Kapasitas penyimpanan optimal dengan kecepatan akses data tinggi",
      badge: "Fast"
    },
    {
      icon: Wifi,
      title: "WiFi Receiver",
      description: "Koneksi internet stabil untuk sistem kasir online",
    },
    {
      icon: Monitor,
      title: "LCD Monitor 16 Inch",
      description: "Layar lebar nyaman untuk tampilan interface kasir yang jelas",
    },
    {
      icon: Scan,
      title: "Barcode Scanner + Dudukan",
      description: "Barcode scanner berkualitas dengan dudukan praktis (BARU)",
      badge: "New"
    },
    {
      icon: Printer,
      title: "Printer Thermal 58mm / 80mm",
      description: "Printer thermal berkualitas tinggi untuk cetak struk (BARU)",
      badge: "New"
    },
    {
      icon: Keyboard,
      title: "Keyboard & Mouse USB",
      description: "Keyboard dan mouse USB nyaman untuk input data kasir",
    },
    {
      icon: Database,
      title: "Program Kasir iPOS 4 Free",
      description: "Software kasir lengkap dengan database 50.000+ produk siap pakai",
      badge: "Premium"
    },
  ]

  return (
    <section ref={containerRef} className="bg-neutral-950 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="specs-title inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Spesifikasi</span>
          </div>
          <h2 className="specs-title text-4xl lg:text-5xl font-bold text-white mb-4">
            Spesifikasi Unggulan
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Paket mesin kasir dengan komponen berkualitas tinggi dan performa handal
          </p>
        </div>

        {/* Specs Image */}
        <div className="specs-title max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
            <img
              src="/post/mesinkasir2.png"
              alt="Spesifikasi Mesin Kasir"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="spec-card bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-600 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative">
                  {spec.badge && (
                    <div className="absolute -top-2 -right-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        spec.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        spec.badge === 'Powerful' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        spec.badge === 'Fast' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      }`}>
                        {spec.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <spec.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {spec.title}
                  </h3>

                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {spec.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-700">
                    <div className="flex items-center gap-2 text-xs text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Termasuk dalam paket</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="spec-card mt-12 p-8 rounded-xl bg-gradient-to-r from-neutral-800 to-neutral-900 border-2 border-neutral-600">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Kenapa Pilih Paket Kami?</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Komponen Original</h4>
                  <p className="text-sm text-neutral-300">Semua hardware bergaransi resmi dari distributor terpercaya</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Plug & Play</h4>
                  <p className="text-sm text-neutral-300">Langsung siap pakai, sudah terinstall dan teruji</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Support 24/7</h4>
                  <p className="text-sm text-neutral-300">Tim teknisi siap membantu kapan saja Anda butuhkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
