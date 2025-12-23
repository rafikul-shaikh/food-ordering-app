import { Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

const MenuItemCard = ({ item, onShowDetails }) => {
  const { addToCart } = useCart();
  return (
    <div className=" p-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-33 object-cover rounded-xl"
      />
      <h3 className="mt-3 text-sm font-medium">{item.name}</h3>
      <button
        onClick={onShowDetails}
        className="text-sm text-blue-500 hover:underline cursor-pointer"
      >
        Show Details
      </button>

      <div className="flex justify-between">
        <p className="mt-4 text-lg ">
          <span className="font-bold text-2xl">₹ </span>
          {item.price}
        </p>
        {item.available ? (
          <button
            onClick={() => {
              console.log("ADD CLICKED", item.name);
              addToCart(item);
            }}
            className=" flex justify-around mt-3 pr-2 w-18 border-2 border-orange-500 text-orange-500 
                  py-1 rounded font-bold hover:bg-orange-500 hover:text-white cursor-pointer"
          >
            <Plus className="font-bold" /> Add
          </button>
        ) : (
          <p className="mt-3 text-sm text-black-500 text-center">
            Not Available
          </p>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
