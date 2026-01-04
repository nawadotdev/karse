import type { Size } from "@/constants/products"

export type CartItem = {
  id: string
  name: string
  variant: string
  size: Size
  price: number
  image: string
  quantity: number
}

export type CartState = {
  items: CartItem[]
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: string; variant: string; size: Size } }
  | { type: "INCREASE"; payload: { id: string; variant: string; size: Size } }
  | { type: "DECREASE"; payload: { id: string; variant: string; size: Size } }
  | { type: "CLEAR" }
