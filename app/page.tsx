import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/products-section"
import { ServicesSection } from "@/components/services-section"
import { ValueProposition } from "@/components/value-proposition"
import { EducationalSection } from "@/components/educational-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ShoppingCart } from "@/components/shopping-cart"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <ValueProposition />
      <ServicesSection />
      <EducationalSection />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
      <ShoppingCart />
    </main>
  )
}
