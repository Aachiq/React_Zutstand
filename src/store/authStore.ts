import { create } from "zustand";
import type { User } from "../types/auth";
import { devtools } from "zustand/middleware";

interface AuthStore {
   user: User | null;
   login: () => void;
   logout: () => void;
   setUser: (user: User | null) => void;
}
export const useAuthStore = create<AuthStore>(
  devtools(
    (set) => ({
      user: {},
      login: () => {
        set({
            user:{
                id:1,
                name:"Elhocine",
                email:"elhocine@gmail.com"
            }
        })
      },
      logout: () => {
        set({
            user: null
        })
      },
      setUser: (userData) => {
        set({
            userData
        })
      }
    }),
    {
      name: "auth-store",
    }
  )
);