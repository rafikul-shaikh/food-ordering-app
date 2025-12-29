import Navbar from "../component/Navbar";
import { useCart } from "../context/CartContext";
import CartSummary from "../component/CartSummary";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="">
        <div className="   pt-28 max-w-4xl mx-auto px-6">
          <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
            {/* LEFT FIXED PANEL */}
            <div className="lg:col-span-2 w-lg">
              <div className="sticky top-28 space-y-6">
                {/* Address */}
                <div className=" bg-white border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-sm text-gray-500">
                    Login to show your address
                  </p>
                </div>

                {/* Payments */}
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold mb-4">Payments</h3>

                  <div className="flex gap-3 mb-4">
                    <button className="flex-1 border rounded-lg py-2">
                      Pay Online
                    </button>
                    <button className="flex-1 border border-green-500 text-green-600 rounded-lg py-2">
                      Pay on Delivery
                    </button>
                  </div>

                  <button className="w-full bg-green-500 text-white py-2 rounded-lg">
                    Place order
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT CART ITEMS */}
            <div className="lg:col-span-1 w-sm bg-white border rounded-lg p-5">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b py-4 last:border-b-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">₹ {item.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="border px-2 py-1 rounded"
                        >
                          <Minus size={14} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="border px-2 py-1 rounded"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))
              )}

              {/* Bill Details */}
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
