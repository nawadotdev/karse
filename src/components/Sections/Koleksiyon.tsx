"use client"

import React, { useState } from "react"
import Image from "next/image"
import { PRODUCTS, Size } from "@/constants/products"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"

const items = Object.values(PRODUCTS)

const Koleksiyon = () => {
  const { state, dispatch } = useCart()
  const [selectedSize, setSelectedSize] = useState<Record<string, Size>>({})

  const getItem = (product: typeof items[number]) => {
    const size = selectedSize[product.variant]
    if (!size) return null

    return state.items.find(
      i =>
        i.id === product.id &&
        i.variant === product.variant &&
        i.size === size
    )
  }

  const add = (product: typeof items[number]) => {
    const size = selectedSize[product.variant]
    if (!size) return

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        variant: product.variant,
        size,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    })
  }

  const increase = (product: typeof items[number]) => {
    const size = selectedSize[product.variant]
    if (!size) return

    dispatch({
      type: "INCREASE",
      payload: {
        id: product.id,
        variant: product.variant,
        size,
      },
    })
  }

  const decrease = (product: typeof items[number]) => {
    const size = selectedSize[product.variant]
    if (!size) return

    dispatch({
      type: "DECREASE",
      payload: {
        id: product.id,
        variant: product.variant,
        size,
      },
    })
  }

  return (
    <section id="koleksiyon" className="bg-muted py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl text-primary font-heading tracking-wide">
            Gömlek Koleksiyonu
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Aynı tasarım, üç farklı renk yorumu.  
            KARŞE’nin sade, zamansız ve doğal keten anlayışı.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-3">
          {items.map(product => {
            const cartItem = getItem(product)

            return (
              <div key={product.variant} className="group text-center">
                <div className="relative mb-8 aspect-3/4 overflow-hidden rounded-3xl bg-muted">
                  <Image
                    src={product.image}
                    alt={product.variant}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-1 text-lg font-medium text-foreground">
                  {product.variant}
                </h3>

                <p className="mt-1 font-semibold text-foreground">
                  {product.price}₺
                </p>

                <div className="mt-4 flex justify-center gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSize(prev => ({
                          ...prev,
                          [product.variant]: size,
                        }))
                      }
                      className={`px-3 py-1 border rounded-md text-sm transition-colors ${
                        selectedSize[product.variant] === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  {!cartItem ? (
                    <Button
                      onClick={() => add(product)}
                      disabled={!selectedSize[product.variant]}
                      className="w-full max-w-xs"
                    >
                      Sepete Ekle
                    </Button>
                  ) : (
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => decrease(product)}
                      >
                        −
                      </Button>

                      <span className="min-w-[24px] text-center font-medium">
                        {cartItem.quantity}
                      </span>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => increase(product)}
                      >
                        +
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Koleksiyon
