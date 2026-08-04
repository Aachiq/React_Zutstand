import { create } from "zustand";
import type { CartItem, Product } from "../types/cart";

interface CartStore {
  cart: CartItem[];

  addToCart: (product: Product) => void;
}

export const useCartStore = create<CartStore>(() => ({
  cart: [],

  addToCart: () => {}
}));