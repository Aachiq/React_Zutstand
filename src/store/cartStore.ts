import { create } from "zustand";
import type { CartItem, Product } from "../types/cart";

interface CartStore {
  cart: CartItem[];

  addToCart: (product: Product) => void;
}

export const useCartStore = create<CartStore>(() => ({
  cart: [
    {
      id: 1,
      title: "MacBook Pro",
      price: 2500,
      image: "https://picsum.photos/200?1",
      quantity: 1,
    },
    {
      id: 2,
      title: "iPhone 16",
      price: 1200,
      image: "https://picsum.photos/200?2",
      quantity: 2,
    },
    {
      id: 3,
      title: "AirPods Pro",
      price: 300,
      image: "https://picsum.photos/200?3",
      quantity: 1,
    },
  ],
  addToCart: () => {}
}));