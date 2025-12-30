import Navbar from "../component/Navbar";
import { useCart } from "../context/CartContext";
import CartSummary from "../component/CartSummary";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-90px)] bg-black/5 pt-28">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* LEFT SECTION */}
          <div className="w-full md:w-7/12 flex flex-col gap-6">
            {/* Address */}
            <div className="bg-white rounded-md p-4">
              <h4 className="font-semibold text-black/70">Address</h4>
              <div className="h-px bg-black/5 my-3" />
              <p className="text-sm text-center font-light">
                Login to show your address
              </p>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-md p-4">
              <h4 className="font-semibold text-black/70">Payments</h4>
              <div className="h-px bg-black/5 my-3" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <button className="border rounded-lg py-3 text-black/70 hover:border-greenColor">
                  Pay Online
                </button>

                <button className="border border-greenColor text-greenColor rounded-lg py-3">
                  Pay on Delivery
                </button>
              </div>

              <button className="w-full bg-greenColor text-white py-2 rounded font-semibold">
                Place Order
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full md:w-5/12 flex flex-col gap-6">
            {/* Cart Items */}
            <div className="bg-white rounded-md p-4 space-y-4 mb-10">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b pb-4 last:border-b-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">₹ {item.price}</p>
                      </div>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="text-greenColor"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="text-greenColor"
                        >
                          <Plus size={16} />
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
