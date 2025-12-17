const MenuItemCard = ({ item }) => {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div>
        {/* <img src={img} alt="" /> */}
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-600">₹ {item.price}</p>
      </div>

      <button className="border px-4 py-1 rounded text-green-600 border-green-600">
        Add
      </button>
    </div>
  );
};

export default MenuItemCard;
