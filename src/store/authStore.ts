import { create } from "zustand";
import type { User } from "../types/auth";

interface AuthStore {
   user: User | null;
   login: (email: string, password: string) => Promise<void>;
   logout: () => void;
   setUser: (user: User | null) => void;
}
export const useAuthStore = create<AuthStore>(
    (set) => ({
      user: null,
      login: async (email, password) => {
        const response = await fetch("http://localhost:3000/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Invalid credentials");
        }
        // backend login send this object without token becasue in backend there is res.cookie("tokanValue") with http-only:
        // front won't use (Header+Authorization Bearer) -> it will use "credentials: "include" & backend will receive token with (req.coockie)
        // req.cookies.tokanValue() not req.headers.authorization
        // {
        //     "user": {
        //         "id": 1,
        //         "name": "Elhocine",
        //         "email": "test@test.com"
        //     }
        // }

        const data = await response.json();

        set({
            user: data.user,
        });
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
  )
;