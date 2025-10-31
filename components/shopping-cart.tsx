"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"

export function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart()

  const handleCheckout = () => {
    if (cart.length === 0) return

    // Build WhatsApp message
    let message = "¡Hola! Quiero hacer un pedido:\n\n"
    cart.forEach((item) => {
      message += `• ${item.name} x${item.quantity} - Bs. ${(item.price * item.quantity).toFixed(2)}\n`
    })
    message += `\n*Total: Bs. ${getTotalPrice().toFixed(2)}*`

    const whatsappUrl = `https://wa.me/59173005680?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Clear cart after checkout
    clearCart()
    setIsCartOpen(false)
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Carrito de Compras
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-lg font-medium text-muted-foreground">Tu carrito está vacío</p>
            <p className="text-sm text-muted-foreground mt-2">Agrega productos para comenzar tu compra</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                  <div className="relative w-20 h-20 flex-shrink-0 bg-muted rounded-md overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 truncate">{item.name}</h4>
                    <p className="text-sm text-primary font-bold mb-2">Bs. {item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <SheetFooter className="flex-col gap-4 border-t pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">Bs. {getTotalPrice().toFixed(2)}</span>
              </div>
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
                onClick={handleCheckout}
              >
                Finalizar Compra por WhatsApp
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
