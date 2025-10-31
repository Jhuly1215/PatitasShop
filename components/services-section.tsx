"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

export function ServicesSection() {
  const handleReserve = (serviceName: string) => {
    const message = `¡Hola! Me gustaría reservar el servicio de: ${serviceName}`
    const whatsappUrl = `https://wa.me/59173005680?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Cuidado profesional para tu mascota
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-5xl mb-2">{service.icon}</div>
                <h3 className="font-bold text-xl text-balance">{service.name}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => handleReserve(service.name)}>
                  Reservar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
