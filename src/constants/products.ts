export const SIZES = ["S", "M", "L", "XL"] as const
export type Size = typeof SIZES[number]

export const PRODUCTS = {
    BLACK_BEAUTY: {
      id: "linen-shirt-black-beauty",
      name: "Keten Gömlek",
      variant: "Black Beauty",
      price: 850,
      image: "/black-beauty.png",
      sizes: SIZES
    },
    BALLAD_BLUE: {
      id: "linen-shirt-bright-white",
      name: "Keten Gömlek",
      variant: "Bright White",
      price: 850,
      image: "/bright-white.png",
      sizes: SIZES
    },
    COCONUT_MILK: {
      id: "linen-shirt-classic-blue",
      name: "Keten Gömlek",
      variant: "Classic Blue",
      price: 850,
      image: "/classic-blue.png",
      sizes: SIZES
    },
  } as const
  