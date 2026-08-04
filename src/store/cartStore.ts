import { create } from "zustand";
import type { CartItem, Product } from "../types/cart";
import { devtools } from "zustand/middleware";

interface CartStore {
  cart: CartItem[];

  addToCart: (product: Product) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  removeFromCart: (id: number) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartStore>(
  devtools(
    (set) => ({
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
      increaseQuantity: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        }));
        
      },
      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      clearCart: () => {
        set({
          cart: [],
        });
      },
      decreaseQuantity: (id) => {
        set((state) => {
          const item = state.cart.find(
            (item) => item.id === id
          );

          if (!item) {
            return state;
          }

          if (item.quantity === 1) {
            return {
              cart: state.cart.filter(
                (item) => item.id !== id
              ),
            };
          }

          return {
            cart: state.cart.map((item) =>
              item.id === id
                ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
                : item
            ),
          };
        });
      },
    }),
    {
      name: "cart-store",
    }
  )
);