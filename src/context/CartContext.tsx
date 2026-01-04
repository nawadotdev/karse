"use client"

import React, { createContext, useContext, useEffect, useReducer } from "react"
import { cartReducer } from "@/lib/cartReducer"
import { CartAction, CartState } from "@/types/cart"

type CartContextType = {
  state: CartState
  dispatch: React.Dispatch<CartAction>
  totalQuantity: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

const initialState: CartState = { items: [] }

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    () => {
      if (typeof window === "undefined") return initialState
      const stored = localStorage.getItem("cart")
      return stored ? JSON.parse(stored) : initialState
    }
  )

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  const totalQuantity = state.items.reduce((s, i) => s + i.quantity, 0)
  const totalPrice = state.items.reduce(
    (s, i) => s + i.quantity * i.price,
    0
  )

  return (
    <CartContext.Provider
      value={{ state, dispatch, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
