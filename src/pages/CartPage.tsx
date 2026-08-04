import { useCartStore } from "../store/cartStore";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
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