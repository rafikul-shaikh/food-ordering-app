import { useState } from "react";
import { menuItems } from "../data/menuItems";
import MenuItemCard from "./MenuItemCard";
import ItemDetailsModal from "./ItemDetailsModal";

const MenuSection = () => {
  const [selectedItem, setSelectedItem] = useState();

  const chickenKebabs = menuItems.filter(
    (item) => item.category === "Chicken Kebabs"
  );
  const fishKebabs = menuItems.filter(
    (item) => item.category === "Fish Kebabs"
  );
  return (
    <section className="max-w-5xl mx-auto px-4">
      <ItemDetailsModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* CHICKEN KEBABS SECTION */}
      <div id="Chicken-Kebabs" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Chicken Kebabs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {chickenKebabs.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onShowDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {/* NEXT SECTION I WILL DO HERE  */}
      <div id="Fish-Kebabs" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Fish Kebab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fishKebabs.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onShowDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
