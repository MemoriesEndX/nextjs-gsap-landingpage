"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan jasa pembuatan website bisnis. Mohon informasi lebih lanjut mengenai harga dan estimasi project.");
    window.open(`https://wa.me/6282213580380?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+6282213580380";
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@example.com?subject=Inquiry%20Website%20Development";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black relative overflow-hidden border-y border-orange-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Konsultasi Gratis
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Setiap Proyek Memiliki
            <span className="block">Kompleksitas yang Berbeda</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hubungi kami untuk mendapatkan <span className="font-semibold">estimasi harga terbaik</span> yang disesuaikan dengan kebutuhan dan budget Anda. Tim kami siap membantu mewujudkan project digital impian Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group bg-orange-600 text-white hover:bg-orange-700 px-8 py-6 text-base rounded-xl shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 font-semibold"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hubungi via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Alternative Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
            <button 
              onClick={handleCall}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm">+62 822-1358-0380</span>
            </button>
            
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            
            <button 
              onClick={handleEmail}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">memoriesendx@gmail.com</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-12 border-t border-neutral-800">
            <p className="text-neutral-400 text-sm mb-6">Dipercaya oleh berbagai bisnis</p>
            <div className="flex flex-wrap justify-center gap-8 text-neutral-300 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Response Cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Estimasi Transparan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Konsultasi Gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
