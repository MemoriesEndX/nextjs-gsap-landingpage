import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TrustedBrands from "@/components/trusted-brands"
import PcAssembly from "@/components/pc-assembly"
import ApparelService from "@/components/apparel-service"
import RetailProducts from "@/components/retail-products"
import RetailSembako from "@/components/retail-sembako"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="dark min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <PcAssembly />
      <ApparelService />
      <RetailProducts />
      <RetailSembako />
      <CtaSection />
      <Footer />
    </div>
  )
}
