import { useCartStore } from "../store/cartStore";
import type { CartItem } from "../types/cart";

interface ICartItemCardProps {
  item: CartItem
}
function CartItemCard({ item }: ICartItemCardProps) {

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  return (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <p>Quantity : {item.quantity}</p>
      <hr />

      <button
        onClick={() =>
          decreaseQuantity(item.id)
        }
      >
        -
      </button>

      <button
        onClick={() =>
          increaseQuantity(item.id)
        }
      >
        +
      </button>

      <button
        onClick={() =>
          removeFromCart(item.id)
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartItemCard;