import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tokodafa.com'), // Ganti dengan domain Anda
  title: {
    default: "Toko Dafa - Toko Kelontong, Cetak Kaos DTF/DTG, Mesin Kasir & Website Bisnis",
    template: "%s | Toko Dafa"
  },
  description:
    "Toko Dafa menyediakan produk kelontong lengkap, jasa cetak kaos DTF/DTG berkualitas, paket mesin kasir UMKM, dan jasa pembuatan website bisnis profesional. Solusi lengkap untuk kebutuhan bisnis Anda.",
  keywords: [
    "toko kelontong terdekat",
    "yoko kelontong",
    "toko dafa",
    "cetak kaos dtf",
    "cetak kaos dtg",
    "jasa sablon kaos",
    "mesin kasir murah",
    "sistem kasir UMKM",
    "jasa pembuatan website",
    "website bisnis",
    "super app indonesia"
  ],
  authors: [{ name: "Toko Dafa" }],
  creator: "Toko Dafa",
  publisher: "Toko Dafa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://tokodafa.com",
    siteName: "Toko Dafa",
    title: "Toko Dafa - Toko Kelontong, Cetak Kaos, Mesin Kasir & Website Bisnis",
    description: "Solusi lengkap untuk kebutuhan bisnis Anda: Toko kelontong, cetak kaos DTF/DTG, mesin kasir UMKM, dan website profesional.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toko Dafa - Solusi Lengkap Bisnis Anda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko Dafa - Solusi Lengkap Bisnis Anda",
    description: "Toko kelontong, cetak kaos DTF/DTG, mesin kasir UMKM, dan website bisnis profesional.",
    images: ["/og-image.jpg"],
  },
  generator: "Next.js",
  applicationName: "Toko Dafa",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "your-google-verification-code", // Tambahkan setelah verifikasi Google Search Console
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
