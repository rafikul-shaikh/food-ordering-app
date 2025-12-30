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
        <div className="max-w-5xl mx-auto px-4 ">
          {/* PAGE HEADING */}
          <h1 className="text-2xl font-bold text-black-500 mb-6 text-center md:text-center">
            Your Cart
          </h1>
        </div>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* LEFT SECTION */}
          <div className="w-full md:w-7/12 flex flex-col gap-6 ">
            {/* Address */}
            <div className="bg-white rounded-md p-4 px-10">
              <h4 className="font-semibold text-black/70">Address</h4>
              <div className="h-px bg-black/5 my-3" />
              <p className="text-sm text-center font-light">
                Login to show your address
              </p>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-md p-4 px-10">
              <h4 className="font-semibold text-black/70">Payments</h4>
              <div className="h-px bg-black/5 my-3" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <button className="border rounded-lg py-3 text-black/70 border-green-500 hover:border-blue-500 cursor-pointer">
                  Pay Online
                </button>

                <button className="border border-green-500 text-green-500 rounded-lg py-3  hover:border-blue-500 cursor-pointer">
                  Pay on Delivery
                </button>
              </div>

              <button className="w-full bg-green-500 text-white py-2 rounded font-semibold cursor-pointer">
                Place Order
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full md:w-5/12 flex flex-col gap-6">
            {/* Cart Items */}
            <div className="bg-white rounded-md p-4 space-y-4 mb-10">
              {cartItems.length === 0 ? (
                <p className="text-xl text-black-500 font-bold text-center">
                  Your cart is empty
                </p>
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
                          className="text-green-500 cursor-pointer"
                        >
                          <Minus size={20} strokeWidth={4} />
                        </button>

                        <span className="text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="text-green-500 cursor-pointer"
                        >
                          <Plus size={20} strokeWidth={4} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 cursor-pointer"
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
