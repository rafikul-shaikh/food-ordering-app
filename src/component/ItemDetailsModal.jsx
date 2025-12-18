import { X } from "lucide-react";
import { Plus } from "lucide-react";

const ItemDetailsModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 relative">
        <h2 className="font-bold mb-2">Prodduct Details</h2>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          <X />
        </button>

        <img
          src={item.image}
          alt={item.name}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>

        <p className="mt-3 text-gray-600">
          Delicious {item.name} prepared with special spices.
        </p>

        <div className="flex justify-between">
          <p className="mt-4 text-lg font-bold">
            <span className="font-bold  text-">₹ </span>
            {item.price}
          </p>

          {item.available ? (
            <button className=" flex justify-around mt-3 pr-2 w-18 border-2 border-orange-500 text-orange-500 py-1 rounded font-bold hover:bg-orange-500 hover:text-white">
              <Plus className="font-bold" /> Add
            </button>
          ) : (
            <p className="mt-3 text-sm text-black-500 text-center">
              Not Available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
