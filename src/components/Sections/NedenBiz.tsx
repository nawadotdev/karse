"use client"

import React from "react"
import {
  Leaf,
  Gem,
  Recycle,
  Clock,
} from "lucide-react"

const FEATURES = [
  {
    title: "Doğal Keten",
    description:
      "Nefes alan, dayanıklı ve hipoalerjenik ketenin sunduğu eşsiz konfor ile gün boyu ferahlık.",
    icon: Leaf,
  },
  {
    title: "Üstün Kalite",
    description:
      "Her detayı özenle düşünülmüş, uzun ömürlü ve zamansız kullanım sunan tasarımlar.",
    icon: Gem,
  },
  {
    title: "Sürdürülebilir Üretim",
    description:
      "Çevre dostu üretim süreçleriyle, doğaya ve geleceğe saygılı bir yaklaşım.",
    icon: Recycle,
  },
  {
    title: "Zamansız Şıklık",
    description:
      "Modern ve klasik çizgilerin dengesiyle her döneme uyum sağlayan sade estetik.",
    icon: Clock,
  },
]

const NedenBiz = () => {
  return (
    <section
      id="neden-biz"
      className="bg-background py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl text-primary font-heading tracking-wide">
            Neden KARŞE?
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            KARŞE, yalnızca bir marka değil; doğaya saygılı üretim anlayışı ve
            zamansız tasarımlarıyla sürdürülebilirliği ve kaliteyi bir yaşam
            felsefesi hâline getiren bir duruştur.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-lg font-medium text-foreground">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default NedenBiz
