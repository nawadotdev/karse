"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"
import Logo from "../Common/Logo"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#koleksiyon", label: "Koleksiyon" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  const { totalQuantity } = useCart()

  useEffect(() => {
    const handler = () => {
      const navHeight = navRef.current?.offsetHeight ?? 64
      setScrolled(window.scrollY > navHeight)
    }

    handler()
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed left-0 top-0 z-50 h-16 w-full transition-all duration-300",
        scrolled
          ? "bg-muted/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/sepet"
            className="relative inline-flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-muted"
          >
            <ShoppingBag className="h-5 w-5" />

            {totalQuantity > 0 && (
              <span className="absolute -left-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-xs font-medium text-primary-foreground">
                {totalQuantity}
              </span>
            )}
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-muted md:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[80%] max-w-sm bg-background/95 backdrop-blur-md p-4"
            >
              <SheetHeader className="border-b border-border pb-4">
                <SheetTitle className="text-2xl tracking-wide text-primary font-heading">
                  KARŞE
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/sepet"
                  className="mt-4 flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Sepet
                  {totalQuantity > 0 && (
                    <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar
