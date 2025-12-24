import { Link } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartSummaryBar = () => {
  const { cartItems, showCartSummaryBar, closeCartSummaryBar } = useCart();

  if (!showCartSummaryBar || cartItems.length === 0) return null;

  return (
    <div className="fixed  bottom-0 left-0  right-0  z-40">
      <div
        className="relative max-w-5xl mx-auto bg-green-600 text-white 
                  px-6 py-3 flex justify-between items-center"
      >
        <button
          onClick={closeCartSummaryBar}
          className="absolute top-1 right-1 text-white hover:text-gray-200 cursor-pointer"
        >
          <X size={18} />
        </button>
        <p>{cartItems.length} items in your cart</p>

        <Link
          to="/cart"
          className="text-white px-4 py-1 rounded-md font-semibold"
        >
          <div className="flex justify-between gap-1">
            Checkout
            <ShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartSummaryBar;
