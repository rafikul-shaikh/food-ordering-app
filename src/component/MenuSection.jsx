import { menuItems } from "../data/menuItems";
import MenuItemCard from "./MenuItemCard";

const MenuSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4">
      {/* CHICKEN KEBABS SECTION */}
      <div id="Chicken-Kebabs" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Chicken Kebabs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* NEXT SECTION I WILL DO HERE  */}
    </section>
  );
};

export default MenuSection;
