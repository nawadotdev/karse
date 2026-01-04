import React from "react"
import HeroImageSlider from "../Common/HeroSlider"

const Hero = () => {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            grid min-h-[calc(100vh-4rem)]
            items-center gap-16
            md:grid-cols-2
          "
        >
          <div>
            <h1 className="mb-6 text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl font-heading text-center md:text-start">
              Zamansız <br className="hidden md:block" />
              Keten Tasarımlar
            </h1>

            <p className="max-w-md text-muted-foreground leading-relaxed">
              Doğadan ilham alan, sade ve sürdürülebilir keten gömlekler.
              KARŞE ile şıklık ve rahatlık doğal bir dengeye kavuşur.
            </p>
          </div>

          <div className="relative">
            <HeroImageSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
