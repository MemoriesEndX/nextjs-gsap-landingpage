"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-neutral-950 py-24">
      <div className="container mx-auto px-4">
        <div className="cta-content max-w-4xl mx-auto text-center bg-gradient-to-r from-orange-600 to-orange-800 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Whether you need a custom PC, tech hardware, or apparel printing—we're here to help bring your vision to
              reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-neutral-100 text-lg px-8 py-6 shadow-xl">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
