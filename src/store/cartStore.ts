import { create } from "zustand";
import type { CartItem, Product } from "../types/cart";

interface CartStore {
  cart: CartItem[];

  addToCart: (product: Product) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [
    {
      id: 1,
      title: "MacBook Pro",
      price: 2500,
      image: "https://picsum.photos/200?1",
      quantity: 1,
    },
  ],
   addToCart: (product) => {
    // here set should comes from params of callabck function of create() -> go above
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    });
  },
}));