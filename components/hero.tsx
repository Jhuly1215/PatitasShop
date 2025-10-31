import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Todo para tu mascota, <span className="text-primary">en un solo lugar 🐾</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Alimentos, accesorios y amor, directo a tu puerta. Productos originales con entregas rápidas en toda
              Bolivia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                <a href="#productos">
                  Ver productos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/59173005680" target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/happy-dog-and-cat-together-with-pet-products.jpg"
                alt="Perro y gato felices"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative paw prints */}
            <div className="absolute -top-4 -right-4 text-6xl opacity-20 animate-bounce">🐾</div>
            <div className="absolute -bottom-4 -left-4 text-5xl opacity-20 animate-bounce delay-300">🐾</div>
          </div>
        </div>
      </div>
    </section>
  )
}
