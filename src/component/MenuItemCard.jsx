const MenuItemCard = ({ item }) => {
  return (
    <div className="border p-4 rounded flex flex-wrap justify-between items-center">
      <div>
        <img
          src={item.image}
          // alt={item.name}
          className="w-50 h-32 object-cover rounded-2xl"
        />
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-600">₹ {item.price}</p>
      </div>
      <div>
        <button className="border px-4 py-1 rounded text-green-600 border-green-600">
          + Add
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
