import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "PatitasShop - Todo lo que tu mascota necesita",
  description:
    "Tienda online de productos para mascotas en Bolivia. Alimentos, accesorios, juguetes y más para perros, gatos y otras mascotas.",
  keywords:
    "tienda de mascotas Bolivia, alimento para perros, arena para gatos, juguetes para mascotas, shampoo para perros, accesorios para mascotas, comida para gatos, productos para mascotas Bolivia",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.className} font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
