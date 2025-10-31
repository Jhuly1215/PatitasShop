import { CheckCircle2, Truck, Shield, MessageCircle } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Productos 100% originales",
    description: "Garantizamos la autenticidad de todos nuestros productos",
  },
  {
    icon: Truck,
    title: "Entregas rápidas",
    description: "Envíos a La Paz, Cochabamba y Santa Cruz",
  },
  {
    icon: CheckCircle2,
    title: "Asesoría veterinaria online",
    description: "Consultas gratuitas con profesionales",
  },
  {
    icon: MessageCircle,
    title: "Atención personalizada",
    description: "Respuesta inmediata por WhatsApp Business",
  },
]

export function ValueProposition() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            ¿Por qué elegir <span className="text-primary">PatitasShop</span>?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Nos comprometemos con el bienestar de tu mascota
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20">
                  <Icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-balance">{value.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
