import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const tips = [
  {
    title: "¿Cada cuánto debo bañar a mi perro?",
    excerpt: "Descubre la frecuencia ideal según el tipo de pelaje y actividad de tu mascota.",
    image: "/dog-bath-grooming.png",
  },
  {
    title: "Alimentación balanceada para gatos",
    excerpt: "Conoce los nutrientes esenciales que tu gato necesita en cada etapa de su vida.",
    image: "/cat-eating-healthy-food.jpg",
  },
  {
    title: "Juguetes seguros para mascotas",
    excerpt: "Guía para elegir los mejores juguetes según la edad y tamaño de tu mascota.",
    image: "/pet-toys-safe-playing.jpg",
  },
]

export function EducationalSection() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Tips de cuidado para tu mascota</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Aprende a cuidar mejor a tu compañero peludo con nuestras guías
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={tip.image || "/placeholder.svg"}
                  alt={tip.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-balance">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty leading-relaxed mb-4">{tip.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Leer más →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
