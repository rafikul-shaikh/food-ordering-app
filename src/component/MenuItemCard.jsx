const MenuItemCard = ({ item }) => {
  return (
    <div className="border rounded-xl p-3">
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-xl"
      />

      {/* NAME */}
      <h3 className="mt-3 text-sm font-medium">{item.name}</h3>

      {/* PRICE */}
      <p className="mt-1 font-semibold">₹ {item.price}</p>

      {/* BUTTON */}
      {item.available ? (
        <button className="mt-3 w-full border border-orange-500 text-orange-500 py-1 rounded font-medium hover:bg-orange-500 hover:text-white">
          + Add
        </button>
      ) : (
        <p className="mt-3 text-sm text-gray-500 text-center">Not Available</p>
      )}
    </div>
  );
};

export default MenuItemCard;
