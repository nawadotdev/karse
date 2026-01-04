import { CartAction, CartState } from "@/types/cart"

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.find(
        i =>
          i.id === action.payload.id &&
          i.variant === action.payload.variant &&
          i.size === action.payload.size
      )

      if (exists) {
        return {
          items: state.items.map(i =>
            i === exists
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        }
      }

      return { items: [...state.items, action.payload] }
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          i =>
            !(
              i.id === action.payload.id &&
              i.variant === action.payload.variant &&
              i.size === action.payload.size
            )
        ),
      }

    case "INCREASE":
      return {
        items: state.items.map(i =>
          i.id === action.payload.id &&
          i.variant === action.payload.variant &&
          i.size === action.payload.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      }

    case "DECREASE":
      return {
        items: state.items
          .map(i =>
            i.id === action.payload.id &&
            i.variant === action.payload.variant &&
            i.size === action.payload.size
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter(i => i.quantity > 0),
      }

    case "CLEAR":
      return { items: [] }

    default:
      return state
  }
}
