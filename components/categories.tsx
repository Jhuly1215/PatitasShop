import { Card, CardContent } from "@/components/ui/card"
import { Dog, Cat, Droplets, Bone } from "lucide-react"

const categories = [
  {
    icon: Dog,
    title: "Alimentos para perros",
    description: "Nutrición completa y balanceada",
    color: "text-primary",
  },
  {
    icon: Cat,
    title: "Arena y comida para gatos",
    description: "Todo para el bienestar felino",
    color: "text-accent",
  },
  {
    icon: Droplets,
    title: "Higiene y cuidado",
    description: "Shampoos, cepillos y más",
    color: "text-primary",
  },
  {
    icon: Bone,
    title: "Accesorios y juguetes",
    description: "Diversión y comodidad",
    color: "text-accent",
  },
]

export function Categories() {
  return (
    <section id="productos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Categorías destacadas</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Encuentra todo lo que necesitas para el cuidado y felicidad de tu mascota
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="font-bold text-lg text-balance">{category.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{category.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
