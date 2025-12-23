import React from "react";
import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  return (
    <div className=" rounded-lg p-4 space-y-4">
      <h2 className="text-lg font-semibold">Bill Summary</h2>

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Delivery Fee</span>
        <span>₹{deliveryFee}</span>
      </div>

      <hr />

      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      <button
        disabled={cartItems.length === 0}
        className={`w-full mt-4 py-3 rounded-lg text-white 
        ${
          cartItems.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        } `}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
