"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Size } from "@/constants/products"

const SepetPage = () => {
  const { state, dispatch, totalPrice, totalQuantity } = useCart()

  const increase = (id: string, variant: string, size: Size) => {
    dispatch({
      type: "INCREASE",
      payload: { id, variant, size },
    })
  }

  const decrease = (id: string, variant: string, size: Size) => {
    dispatch({
      type: "DECREASE",
      payload: { id, variant, size },
    })
  }

  const remove = (id: string, variant: string, size: Size) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id, variant, size },
    })
  }

  const clear = () => {
    dispatch({ type: "CLEAR" })
  }

  return (
    <main className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl text-primary font-heading">Sepet</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Toplam {totalQuantity} adet ürün
            </p>
          </div>

          {state.items.length > 0 && (
            <Button variant="outline" onClick={clear}>
              Sepeti Temizle
            </Button>
          )}
        </div>

        {state.items.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center">
            <p className="text-muted-foreground">
              Sepetiniz şu an boş. Koleksiyona göz atarak bir beden seçip ürün
              ekleyebilirsiniz.
            </p>

            <div className="mt-6">
              <Link href="/#koleksiyon">
                <Button>Koleksiyona Git</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            <div className="space-y-6">
              {state.items.map(item => (
                <div
                  key={`${item.id}-${item.variant}-${item.size}`}
                  className="rounded-3xl border border-border bg-card p-6"
                >
                  <div className="flex gap-6">
                    <div className="relative h-28 w-20 overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={item.image}
                        alt={`${item.variant} ${item.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {item.name}
                          </p>
                          <h2 className="text-lg font-medium text-foreground">
                            {item.variant}
                          </h2>

                          <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                            <span>Beden: {item.size}</span>
                            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                            <span>{item.price}₺</span>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
                          onClick={() => remove(item.id, item.variant, item.size)}
                        >
                          Kaldır
                        </Button>
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => decrease(item.id, item.variant, item.size)}
                          >
                            −
                          </Button>

                          <span className="min-w-[28px] text-center font-medium">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => increase(item.id, item.variant, item.size)}
                          >
                            +
                          </Button>
                        </div>

                        <p className="text-right font-semibold text-foreground">
                          {item.quantity * item.price}₺
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-medium text-foreground">
                Sipariş Özeti
              </h3>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Ara Toplam</span>
                  <span>{totalPrice}₺</span>
                </div>

                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Kargo</span>
                  <span>Ücretsiz</span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-border text-foreground font-semibold">
                  <span>Toplam</span>
                  <span>{totalPrice}₺</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full" disabled>
                  Ödemeye Geç
                </Button>

                <Link href="/#koleksiyon" className="block">
                  <Button variant="outline" className="w-full">
                    Alışverişe Devam Et
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Şu anda online ödeme kabul edemiyoruz, alışverişinizi tamamlamak için lütfen bizimle iletişime geçin.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}

export default SepetPage
