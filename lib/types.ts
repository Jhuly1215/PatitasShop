export interface Product {
  id: string
  name: string
  price: number
  category: "perros" | "gatos" | "higiene" | "accesorios"
  image: string
  description: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
}
