import type { CartItem } from "../types/cart";

// these functions not yet used just they are put here as best practice
export const getTotalPrice = (cart: CartItem[]) =>
  cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const getTotalItems = (cart: CartItem[]) =>
  cart.reduce(
    (total, item) => total + item.quantity,
    0
  );