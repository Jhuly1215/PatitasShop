import { Facebook, Instagram, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐾</span>
              <span className="text-xl font-bold text-primary">PatitasShop</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu tienda de confianza para el cuidado y bienestar de tus mascotas en Bolivia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#productos" className="text-muted-foreground hover:text-primary transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#accesorios" className="text-muted-foreground hover:text-primary transition-colors">
                  Accesorios
                </Link>
              </li>
              <li>
                <Link href="#higiene" className="text-muted-foreground hover:text-primary transition-colors">
                  Higiene
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Envíos a todo Bolivia</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@patitasshop.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@patitasshop.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-accent" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Únete a nuestra comunidad pet friendly</p>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 PatitasShop. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Políticas de privacidad
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
