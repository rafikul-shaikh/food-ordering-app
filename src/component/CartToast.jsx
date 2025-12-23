import { CheckCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartToast = () => {
  const { showToast } = useCart();
  console.log("Toast State:", showToast);

  if (!showToast) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg z-50">
      <CheckCircle size={18} />
      Item Added
    </div>
  );
};

export default CartToast;
