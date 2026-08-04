import { useEffect } from "react";
import { useCartStore } from "../store/cartStore";
import CartItemCard from "../components/CartItemCard";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>

      <button
        onClick={() =>
          addToCart({
            id: 2,
            title: "MacBook& ",
            price: 3211,
            image: "https://picsum.photos/200?1",
          })
        }
      >
        Add MacBook
      </button>

      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <CartItemCard
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default CartPage;