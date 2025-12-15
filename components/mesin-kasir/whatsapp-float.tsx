"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6282213580380?text=Halo,%20saya%20tertarik%20dengan%20Promo%20Paket%20Mesin%20Kasir",
      "_blank"
    )
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isMinimized && (
          <div className="mb-4 animate-in slide-in-from-bottom-5 duration-500">
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs relative">
              <button
                onClick={toggleMinimize}
                className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 text-sm">Tokodafa CS</h4>
                  <p className="text-xs text-neutral-500">Online</p>
                </div>
              </div>
              
              <p className="text-sm text-neutral-700 mb-3">
                Ada yang bisa kami bantu? Chat langsung dengan tim kami!
              </p>
              
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat WhatsApp
              </Button>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={isMinimized ? handleWhatsApp : toggleMinimize}
          className="group w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          
          {/* Pulse Animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        </button>
      </div>
    </>
  )
}
