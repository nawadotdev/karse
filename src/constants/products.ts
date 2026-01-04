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
      id: "linen-shirt-ballad-blue",
      name: "Keten Gömlek",
      variant: "Ballad Blue",
      price: 850,
      image: "/ballad-blue.png",
      sizes: SIZES
    },
    COCONUT_MILK: {
      id: "linen-shirt-coconut-milk",
      name: "Keten Gömlek",
      variant: "Coconut Milk",
      price: 850,
      image: "/coconut-milk.png",
      sizes: SIZES
    },
  } as const
  