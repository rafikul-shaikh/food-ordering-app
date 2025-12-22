import { useState } from "react";

import MenuItemCard from "./MenuItemCard";
import ItemDetailsModal from "./ItemDetailsModal";

const MenuSection = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState();

  const chickenKebabs = items.filter(
    (item) => item.category === "Chicken Kebabs"
  );
  const fishKebabs = items.filter((item) => item.category === "Fish Kebabs");
  const vegKebabs = items.filter((item) => item.category === "Veg Kebabs");
  const kolkataStyleBiryani = items.filter(
    (item) => item.category === "Kolkata Style Biryani"
  );
  const homeStyleThalis = items.filter(
    (item) => item.category === "Home Style Bengali Thalis"
  );

  const fishHeaven = items.filter((item) => item.category === "Fish Heaven");
  const mainCourse = items.filter((item) => item.category === "Main Course");

  const breadAndRice = items.filter((item) => item.category === "Bread & Rice");

  return (
    <section className="max-w-5xl mx-auto px-4">
      <ItemDetailsModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* CHICKEN KEBABS SECTION */}
      <div id="Chicken-Kebabs" className="mb-16">
        <h2 className="text-xl font-semibold">Chicken Kebabs</h2>

        <hr className="my-2 px-4 mx-auto border-gray-300" />

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
      {/* FISH KEBAB SECTION   */}
      <div id="Fish-Kebabs" className="mb-16">
        <h2 className="text-xl font-semibold">Fish Kebab</h2>

        <hr className="my-2 px-4 mx-auto border-gray-300" />

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
      {/* VEG KEBAB SECTION   */}
      <div id="Veg-Kebabs" className="mb-16">
        <h2 className="text-xl font-semibold">Veg Kebab</h2>

        <hr className="my-2 px-4 mx-auto border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vegKebabs.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onShowDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {/* KOLKATA STYLE BIRIYANI SECTION  */}
      <div id="Kolkata Style Biryani" className="mb-16">
        <h2 className="text-xl font-semibold ">Kolkata Style Biryani</h2>

        <hr className="my-2 px-4 mx-auto border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {kolkataStyleBiryani.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onShowDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {/* HOME STYLE BENGALI THALIS SECTION  */}
      <div id="Home Style Bengali Thalis" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          Home Style Bengali Thalis
        </h2>

        <hr className="my-2 px-4 mx-auto border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {homeStyleThalis.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onShowDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {/* FISH HEAVEN SECTION  */}
      <div id="Fish Heaven" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Fish Heaven</h2>

        <hr className="my-2 px-4 mx-auto border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fishHeaven.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onShowDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {/* MAIN COURSE SECTION  */}
      <div id="Main Course" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Main Course</h2>

        <hr className="my-2 px-4 mx-auto border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mainCourse.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onShowDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {/* BREAD & RICE SECTION  */}
      <div id="Bread & Rice" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Bread & Rice</h2>

        <hr className="my-2 px-4 mx-auto border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {breadAndRice.map((item) => (
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
