import { useEffect } from "react";
import { useCartStore } from "../store/cartStore";
import CartItemCard from "../components/CartItemCard";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  const addToCart = useCartStore((state) => state.addToCart);

  // here we couldn't do export const becasue this is a variable not function. that's why to be reused
  // in all compoennets without recalculate everything --> hre we move this but as function to filme called Selectors.
  
  const totalPrice = cart.reduce(
    (total, item) => {
      return total + item.price * item.quantity;
    },
    0
  );

  const totalItems = cart.reduce(
    (total, item) => {
      return total + item.quantity;
    },
    0
  );
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
      
      <p>Total Items : {totalItems}</p>

      <p>Total Price : ${totalPrice}</p>

      <hr />
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