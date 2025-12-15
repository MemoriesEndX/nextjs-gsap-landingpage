"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function TrustedBrands() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".brand-track", {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: "linear",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const brands = ["PLN SURLAYA", "UDIKLAT", "UNTIRTA", "TOKO DAFA", "MEMORIES ENDXYZ",]

  return (
    <section className="bg-neutral-950 py-16 overflow-hidden border-y border-neutral-800">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-neutral-500 text-sm tracking-wider uppercase">Trusted Partners</h2>
      </div>
      <div ref={containerRef} className="relative w-full">
        <div className="brand-track flex w-max gap-16 lg:gap-24">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex gap-16 lg:gap-24">
                {brands.map((brand) => (
                  <span
                    key={`${brand}-${i}`}
                    className="text-white text-2xl lg:text-3xl font-bold opacity-40 hover:opacity-100 transition-opacity tracking-widest whitespace-nowrap"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
