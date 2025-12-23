import React from "react";
import { useCart } from "../context/CartContext";

const CartItemCard = () => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();
  return (
    <div className="flex items-center justify-between border-b py-4">
      {/* Left: Image + Name */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />

        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>

      {/* Middle: Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-3 py-1 border"
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-3 py-1 border"
        >
          +
        </button>
      </div>

      {/* Right: Remove */}
      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
        ✕
      </button>
    </div>
  );
};

export default CartItemCard;
