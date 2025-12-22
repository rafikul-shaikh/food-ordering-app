import Navbar from "../component/Navbar";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart;
  return (
    <>
      <Navbar />

      <div className="pt-28 max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 border rounded-lg p-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          <div className="border rounded-lg p-4">
            <p className="text-gray-500">Summary will appear here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
