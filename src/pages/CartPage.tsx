import { useEffect } from "react";
import { useCartStore } from "../store/cartStore";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    addToCart({
      id: 2,
      title: "MacBook2",
      price: 3000,
      image: "https://picsum.photos/200?1",
    });
  }, []);

  console.log(cart);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>Quantity : {item.quantity}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CartPage;