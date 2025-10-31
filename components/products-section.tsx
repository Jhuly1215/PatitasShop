"use client"

import { useState } from "react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "todos", label: "Todos" },
  { id: "perros", label: "Perros" },
  { id: "gatos", label: "Gatos" },
  { id: "higiene", label: "Higiene" },
  { id: "accesorios", label: "Accesorios" },
]

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const filteredProducts =
    selectedCategory === "todos" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section id="productos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Nuestros Productos</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Productos de calidad para el bienestar de tu mascota
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
