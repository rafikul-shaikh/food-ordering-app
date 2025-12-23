import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartSummaryBar = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white px-6 py-3 flex justify-between items-center z-40">
      <p>{cartItems.length} items in your cart</p>

      <Link
        to="/cart"
        className="bg-white text-green-600 px-4 py-1 rounded-md font-semibold"
      >
        Checkout
      </Link>
    </div>
  );
};

export default CartSummaryBar;
