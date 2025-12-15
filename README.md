# 🚀 Toko Dafa - Multi-Service Landing Page

Sebuah landing page modern dan responsif yang dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS. Project ini menampilkan berbagai layanan bisnis termasuk penjualan PC/Laptop, jasa cetak kaos, mesin kasir, dan pembuatan website bisnis.

## ✨ Fitur Utama

### 🏠 Homepage (Landing Page Utama)
- **Hero Section** - Tampilan pembuka yang menarik
- **Trusted Brands** - Showcase brand-brand terpercaya
- **PC Assembly** - Layanan rakit PC custom
- **Apparel Service** - Jasa cetak kaos dan merchandise
- **Retail Products** - Produk retail PC, laptop, dan aksesoris
- **Retail Sembako** - Produk sembako dan kebutuhan sehari-hari
- **CTA Section** - Call-to-action untuk konversi
- **Footer** - Informasi kontak dan navigasi

### 👕 Cetak Kaos (DTF & DTG)
Halaman khusus untuk layanan cetak kaos dengan fitur:
- **Hero Section** - Pengenalan layanan cetak kaos
- **Products Showcase** - Katalog produk kaos
- **Services** - Detail layanan DTF dan DTG
- **Pricing Plans** - Paket harga cetak kaos
- **Benefits** - Keunggulan layanan
- **CTA Section** - Tombol kontak WhatsApp

**SEO Optimized**: Meta tags lengkap dengan keywords "cetak kaos dtf", "cetak kaos dtg", "jasa sablon kaos"

### 💰 Mesin Kasir
Halaman promo paket mesin kasir dengan fitur:
- **Hero Section** - Banner promosi mesin kasir
- **Product Showcase** - Tampilan visual produk mesin kasir
- **Specifications** - Detail spesifikasi teknis
- **Pricing Packages** - Paket harga lengkap dengan bonus
- **CTA Section** - Formulir pemesanan
- **WhatsApp Float Button** - Tombol floating untuk chat WhatsApp

**Highlights**: Paket mulai dari Rp1.980.000 dengan bonus Speaker, Rak Kertas, Printer, dan WiFi USB

### 🌐 Website Bisnis
Halaman jasa pembuatan website dengan fitur:
- **Hero Section** - Pengenalan layanan web development
- **Services** - Jenis-jenis website yang dapat dibuat (Company Profile, Super App, Sistem Informasi)
- **Portfolio** - Showcase project yang telah dikerjakan
- **Why Choose Us** - Keunggulan kompetitif
- **Workflow** - Alur kerja pembuatan website
- **FAQ** - Pertanyaan yang sering diajukan
- **CTA Section** - Form untuk memulai project

**SEO Optimized**: Meta tags lengkap untuk web development services

## 🛠️ Tech Stack

### Core
- **Next.js 16** - React Framework dengan App Router
- **TypeScript** - Type-safe JavaScript
- **React 19** - UI Library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library dengan Radix UI
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants
- **GSAP** - Animasi advanced

### Form Management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Components
Lebih dari 50+ reusable UI components termasuk:
- Accordion, Alert, Avatar, Badge
- Button, Card, Carousel, Chart
- Dialog, Dropdown, Form, Input
- Modal, Popover, Select, Table
- Tabs, Toast, Tooltip, dan banyak lagi

### Additional Libraries
- **Embla Carousel** - Smooth carousel/slider
- **date-fns** - Date utility
- **cmdk** - Command menu
- **Sonner** - Toast notifications
- **Recharts** - Chart library
- **Vaul** - Drawer component

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Struktur Project

```
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── cetak-kaos/              # Halaman cetak kaos
│   │   └── page.tsx
│   ├── mesin-kasir/             # Halaman mesin kasir
│   │   └── page.tsx
│   └── website-bisnis/          # Halaman website bisnis
│       └── page.tsx
├── components/                   # React components
│   ├── navbar.tsx               # Navigation bar
│   ├── footer.tsx               # Footer component
│   ├── hero.tsx                 # Hero section
│   ├── cetak-kaos/              # Components untuk halaman cetak kaos
│   │   ├── hero.tsx
│   │   ├── products.tsx
│   │   ├── services.tsx
│   │   ├── pricing.tsx
│   │   ├── benefits.tsx
│   │   └── cta.tsx
│   ├── mesin-kasir/             # Components untuk halaman mesin kasir
│   │   ├── hero.tsx
│   │   ├── showcase.tsx
│   │   ├── specs.tsx
│   │   ├── pricing.tsx
│   │   ├── cta.tsx
│   │   └── whatsapp-float.tsx
│   ├── website-bisnis/          # Components untuk halaman website bisnis
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── portfolio.tsx
│   │   ├── why-choose-us.tsx
│   │   ├── workflow.tsx
│   │   ├── faq.tsx
│   │   └── cta.tsx
│   └── ui/                      # Reusable UI components (50+)
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                         # Utility functions
│   └── utils.ts
├── public/                      # Static assets
│   └── post/                    # Product images
├── styles/                      # Additional styles
└── components.json              # shadcn/ui configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ atau lebih baru
- pnpm (recommended), npm, atau yarn

### Installation

1. Clone repository:
```bash
git clone <repository-url>
cd next-js-landing-page
```

2. Install dependencies:
```bash
pnpm install
# atau
npm install
# atau
yarn install
```

3. Jalankan development server:
```bash
pnpm dev
# atau
npm run dev
# atau
yarn dev
```

4. Buka browser dan akses:
```
http://localhost:3000
```

## 📜 Available Scripts

```bash
pnpm dev          # Menjalankan development server
pnpm build        # Build untuk production
pnpm start        # Menjalankan production server
pnpm lint         # Jalankan ESLint
```

## 🎨 Customization

### Menambah Component UI Baru
Project ini menggunakan shadcn/ui. Untuk menambah component baru:

```bash
npx shadcn@latest add [component-name]
```

### Mengubah Theme
Edit file `app/globals.css` untuk mengubah color scheme dan theme variables.

### Menambah Halaman Baru
1. Buat folder baru di `app/`
2. Tambahkan `page.tsx` di folder tersebut
3. Buat components terkait di `components/[nama-halaman]/`

## 🌐 Routing

Aplikasi menggunakan Next.js App Router:

- `/` - Homepage (Landing page utama)
- `/cetak-kaos` - Halaman jasa cetak kaos
- `/mesin-kasir` - Halaman promo mesin kasir
- `/website-bisnis` - Halaman jasa pembuatan website

## 📱 Responsive Design

Semua halaman telah dioptimalkan untuk berbagai ukuran layar:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🔍 SEO Features

- Meta tags yang dioptimalkan untuk setiap halaman
- Open Graph tags untuk social media sharing
- Twitter Card meta tags
- Structured data (Schema.org)
- Semantic HTML structure
- Optimized images dan assets

## 🎯 Key Features

### Dark Mode Ready
Project sudah dikonfigurasi dengan dark mode menggunakan `next-themes`.

### Type Safety
Full TypeScript support untuk type safety dan better developer experience.

### Component Library
50+ pre-built components siap pakai dari shadcn/ui dan Radix UI.

### Performance Optimized
- Server-side rendering (SSR)
- Static generation untuk halaman yang sesuai
- Lazy loading untuk images
- Code splitting otomatis

### Animations
Menggunakan GSAP untuk animasi yang smooth dan performant.

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

## 📝 License

Project ini bersifat private dan dikembangkan untuk Toko Dafa.

## 📞 Contact

Untuk pertanyaan atau support:
- WhatsApp: 0822-1358-0380
- Website: [Your Website URL]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Built with ❤️ using Next.js and TypeScript**
