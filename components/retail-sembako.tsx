"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { ShoppingCart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    name: "Beras Premium",
    price: "Rp 72.000",
    description: "Beras putih kualitas premium",
    size: "5 Kg",
    badge: "Best Seller",
    image: "/premium-white-rice-bag.jpg",
  },
  {
    name: "Minyak Goreng",
    price: "Rp 32.000",
    description: "Minyak goreng tanpa kolesterol",
    size: "2 Liter",
    badge: "Promo",
    image: "/cooking-oil-bottle.png",
  },
  {
    name: "Gula Pasir",
    price: "Rp 15.000",
    description: "Gula pasir murni berkualitas",
    size: "1 Kg",
    badge: null,
    image: "/sugar-bag.jpg",
  },
  {
    name: "Telur Ayam",
    price: "Rp 28.000",
    description: "Telur ayam segar pilihan",
    size: "1 Kg (±16 butir)",
    badge: "Best Seller",
    image: "/fresh-farm-eggs.png",
  },
  {
    name: "Tepung Terigu",
    price: "Rp 12.000",
    description: "Tepung terigu serbaguna",
    size: "1 Kg",
    badge: null,
    image: "/flour-bag.png",
  },
  {
    name: "Mie Instan",
    price: "Rp 2.500",
    description: "Mie instan rasa ayam bawang",
    size: "85 gram",
    badge: null,
    image: "/instant-noodles-package.jpg",
  },
  {
    name: "Gas LPG 3Kg",
    price: "Rp 22.000",
    description: "Tabung gas LPG melon",
    size: "3 Kg",
    badge: null,
    image: "/lpg-gas-cylinder.jpg",
  },
  {
    name: "Susu UHT",
    price: "Rp 18.000",
    description: "Susu UHT full cream",
    size: "1 Liter",
    badge: "Promo",
    image: "/milk-carton.png",
  },
]

export default function RetailSembako() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Animate heading and description
      gsap.from([headingRef.current, descRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      })

      // Animate product cards with stagger
      gsap.from(".sembako-card", {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sembako-grid",
          start: "top 80%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(`Halo, saya ingin memesan ${productName}`)
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank")
  }

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Retail Sembako
          </h2>
          <p ref={descRef} className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Menjual kebutuhan pokok harian dengan harga terjangkau dan kualitas terjamin
          </p>
        </div>

        {/* Products Grid */}
        <div className="sembako-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="sembako-card group bg-gradient-to-br from-neutral-800 to-neutral-900 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-neutral-600 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-neutral-700 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === "Best Seller" ? "bg-orange-600 text-white" : "bg-green-600 text-white"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-300 mb-2">{product.size}</p>
                <p className="text-sm text-neutral-400 mb-4 line-clamp-2">{product.description}</p>

                {/* Price and Action */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-400">{product.price}</span>
                </div>

                {/* Order Button */}
                <Button
                  onClick={() => handleWhatsAppOrder(product.name)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 group/btn"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Pesan via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-4">
            Pengiriman cepat untuk wilayah sekitar • Harga bisa berubah sewaktu-waktu
          </p>
          <Button
            variant="outline"
            className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white transition-all duration-300 bg-transparent"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </section>
  )
}
