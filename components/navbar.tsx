'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 md:px-20 py-4 fixed top-0 z-50 flex justify-between items-center bg-[#A8A8A8FF]/40 backdrop-blur-lg shadow-sm border-b border-[#3A6EA5]/30">
        <a
          href="#hero"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300"
        >
          <Image
            src="/toko dafa 2.png"
            alt="Toko Dafa"
            width={240}
            height={40}
            className="h-25 w-auto"
            priority
          />
          <span className="text-[#A7B0BB] text-lg font-light">×</span>
          <Image
            src="/MemoriesEndX.png"
            alt="MemoriesEndX"
            width={120}
            height={32}
            className="h-5 w-auto"
            priority
          />
        </a>

        <div className="space-x-6 hidden md:flex items-center">
          <a href="/" className="relative font-medium text-[#F4F6F8] hover:text-orange-400 transition-colors duration-300">
            Home
          </a>
          <a href="/website-bisnis" className="relative font-medium text-[#F4F6F8] hover:text-orange-400 transition-colors duration-300">
            Pembuatan Website
          </a>
          <a href="/cetak-kaos" className="relative font-medium text-[#F4F6F8] hover:text-orange-400 transition-colors duration-300">
            Pembuatan Baju
          </a>
          <a href="/mesin-kasir" className="relative font-medium text-[#F4F6F8] hover:text-orange-400 transition-colors duration-300">
            Pembuatan Mesin Kasir
          </a>
          <a href="/toko-cabang" className="relative font-medium text-[#F4F6F8] hover:text-orange-400 transition-colors duration-300">
            Cabang Grosir
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#F4F6F8] hover:bg-[#3A6EA5]/20 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-lg shadow-lg border-b border-[#C3C6CAFF]/30">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a
              href="/"
              className="font-medium text-[#1E2A36] hover:text-orange-500 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/website-bisnis"
              className="font-medium text-[#1E2A36] hover:text-orange-500 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pembuatan Website
            </a>
            <a
              href="/cetak-kaos"
              className="font-medium text-[#1E2A36] hover:text-orange-500 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pembuatan Baju
            </a>
            <a
              href="/mesin-kasir"
              className="font-medium text-[#1E2A36] hover:text-orange-500 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pembuatan Mesin Kasir
            </a>
            <a
              href="/toko-cabang"
              className="font-medium text-[#1E2A36] hover:text-orange-500 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cabang Grosir
            </a>
          </div>
        </div>
      )}
    </>
  );
}
