import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Miguel Rodriguez",
    location: "La Paz",
    rating: 5,
    comment: "Excelente servicio! Mi perro ama la comida que compré. Llegó súper rápido y bien empaquetado.",
    avatar: "/smiling-woman-profile.png",
  },
  {
    name: "Christian Mendoza",
    location: "Santa Cruz",
    rating: 5,
    comment: "La atención por WhatsApp es increíble. Me ayudaron a elegir los mejores productos para mi gato.",
    avatar: "/smiling-man-profile.png",
  },
  {
    name: "Sara Chen",
    location: "Cochabamba",
    rating: 5,
    comment: "Productos originales y precios justos. Ya hice mi segunda compra y todo perfecto!",
    avatar: "/woman-happy-profile.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Clientes felices, mascotas felices</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Lee lo que dicen nuestros clientes sobre PatitasShop
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-pretty">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
