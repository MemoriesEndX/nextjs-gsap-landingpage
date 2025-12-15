"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function RetailProducts() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".retail-title", {
        scrollTrigger: {
          trigger: ".retail-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
      })

      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: ".product-card",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      })

      // Hover animations
      const cards = document.querySelectorAll(".product-card")
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)",
            duration: 0.3,
          })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "0 0 0 rgba(234, 88, 12, 0)",
            duration: 0.3,
          })
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const products = [
    {
      name: "Promo Mesin Kasir Printer 58mm",
      category: "Mesin Kasir",
      price: "RP.1980.000",
      image: "/post/mesinkasir1.png",
    },
    {
      name: "Pricelist & Details Spesifikasi",
      category: "Komputer",
      price: "RP.1980.000 - RP.2920.000",
      image: "/post/mesinkasir2.png",
    },
    {
      name: "Promo Mesin Kasir Printer 80mm",
      category: "Mesin Kasir",
      price: "RP.2.340.000",
      image: "/post/mesinkasir1.png",
    },
    {
      name: "Photobooth Web Camera Event",
      category: "Web Development (Medium)",
      level: "Medium",
      price: "RP.0 - RP.1.280.000",
      description: "Web photobooth interaktif dengan akses kamera, filter, frame event, dan fitur download hasil foto.",
      image: "/post/website/Photobooth 2.png",
    },
    {
      name: "Booking System Website",
      category: "Web Development (Easy)",
      level: "Easy",
      price: "RP.0 - RP.799.000",
      description: "Website sistem booking sederhana dengan manajemen jadwal, form pemesanan, dan dashboard admin.",
      image: "/post/website/Roombooking.webp",
    },
    {
      name: "PLN UPDL Suralaya Asset Management System",
      category: "Web Development (Advanced)",
      level: "Advanced / Awesome Project",
      price: "RP.0 - RP.5.600.000",
      description: "Sistem pengolahan aset digital PLN UPDL Suralaya dengan manajemen data aset, monitoring, pencarian cepat, dan dashboard analitik berbasis web.",
      image: "/post/website/AWESOME 2.png",
    },

    {
      name: "Satu Desa",
      category: "Web Development",
      price: "Custom (Based on Complexity)",
      image: "/post/website/SATUDESA.png",
      desc: "Aplikasi web layanan desa terpadu yang menyediakan informasi desa, pengaduan warga, transparansi anggaran, layanan dokumen, dan statistik pembangunan desa secara real-time."
    },
    {
      name: "Fiverr Freelancers",
      category: "Web Development",
      price: "Custom (Based on Complexity)",
      image: "/post/website/FIVERR.webp",
      desc: "Pengalaman mengerjakan berbagai project besar untuk klien seperti Adasgame.com dan Robot Negotiator, meliputi konten website dan promosi perusahaan dengan kontribusi peningkatan performa hingga 11%."
    },
    {
      name: "Untirta Trends",
      category: "Web Development",
      price: "Custom (Based on Complexity)",
      image: "/post/website/UNTIRTA TRENDS.webp",
      desc: "Web informasi interaktif yang menyajikan data tren dan statistik kampus Universitas Sultan Ageng Tirtayasa, meliputi akademik, kegiatan mahasiswa, dan visualisasi data terkini."
    },
    {
      name: "DTF Print Custom Size",
      category: "DTF Printing",
      price: "RP.6.000 / cm²",
      image: "post/tshirt/T-shirt 2.png",
    },
    {
      name: "DTG Print Depan (A4)",
      category: "DTG Printing",
      price: "RP.50.000",
      image: "post/tshirt/T-shirt 3.png",
    },
    {
      name: "DTG Print Depan + Belakang",
      category: "DTG Printing",
      price: "RP.85.000",
      image: "post/tshirt/T-shirt 1.png",
    },

  ]

  return (
    <section ref={containerRef} className="bg-neutral-900 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Retail Products</span>
          </div>
          <h2 className="retail-title text-4xl lg:text-5xl font-bold text-white mb-4">Premium Tech Hardware</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Curated selection of the latest and most powerful computer components and peripherals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="product-card bg-neutral-800 border-neutral-700 overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-square bg-neutral-900 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs text-orange-500 font-medium mb-1">{product.category}</div>
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <Button
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700 text-white group-hover:scale-110 transition-transform"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-700 hover:bg-neutral-800 text-white bg-transparent"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
