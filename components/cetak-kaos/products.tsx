"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cetak-products-title", {
        scrollTrigger: {
          trigger: ".cetak-products-title",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all"
      })

      gsap.from(".cetak-product-image", {
        scrollTrigger: {
          trigger: ".cetak-product-image",
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

  const images = [
    { src: "/post/tshirt/T-shirt 1.png", alt: "Cetak Kaos DTG Depan Belakang" },
    { src: "/post/tshirt/T-shirt 2.png", alt: "Cetak Kaos DTF Custom" },
    { src: "/post/tshirt/T-shirt 3.png", alt: "Cetak Kaos DTG A4" },
    { src: "/post/tshirt/T-shirt 4.png", alt: "Hasil Cetak Premium" },
  ]

  return (
    <section ref={containerRef} className="bg-neutral-900 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-sm text-orange-400 font-medium">Portfolio Produk</span>
          </div>
          <h2 className="cetak-products-title text-4xl lg:text-5xl font-bold text-white mb-4">
            Hasil Cetak Berkualitas Premium
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Lihat hasil cetak kaos kami dengan kualitas tajam, warna cerah, dan detail sempurna
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="cetak-product-image group relative aspect-square rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 cursor-pointer shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
