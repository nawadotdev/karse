import React from "react"
import Image from "next/image"

const PRODUCTS = [
  {
    name: "Black Beauty",
    pantone: "Pantone 19-3911 TCX",
    image: "/black-beauty.png",
  },
  {
    name: "Ballad Blue",
    pantone: "Pantone 14-4122 TCX",
    image: "/ballad-blue.png",
  },
  {
    name: "Coconut Milk",
    pantone: "Pantone 11-0608 TCX",
    image: "/coconut-milk.png",
  },
]

const Koleksiyon = () => {
  return (
    <section
      id="koleksiyon"
      className="bg-muted py-40"
    >
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
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group text-center"
            >
              <div className="relative mb-8 aspect-3/4 overflow-hidden rounded-3xl bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="mb-1 text-lg font-medium text-foreground">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Koleksiyon
