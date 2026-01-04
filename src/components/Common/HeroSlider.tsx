"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/black-beauty.png",
  "/ballad-blue.png",
  "/coconut-milk.png",
]

const HeroImageSlider = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md aspect-3/4 overflow-hidden rounded-3xl bg-muted md:max-h-[520px]">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={src}
            alt="KARŞE Keten Gömlek"
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default HeroImageSlider
