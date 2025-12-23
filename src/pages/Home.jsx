import Navbar from "../component/Navbar";
import CategorySlider from "../component/CategorySlider";
import SearchBar from "../component/SearchBar";
import MenuSection from "../component/MenuSection";
import Footer from "../component/Footer";
import { useState } from "react";
import { menuItems } from "../data/menuItems";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const matchedItems = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.category.toLowerCase().includes(searchText.toLowerCase())
  );
  const unmatchedItems = menuItems.filter(
    (item) => !matchedItems.includes(item)
  );
  const sortedItems =
    searchText.trim() === "" ? menuItems : [...matchedItems, ...unmatchedItems];

  return (
    <main className="pt-24">
      <CategorySlider />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <MenuSection
        items={sortedItems}
        matchedItems={matchedItems}
        searchText={searchText}
      />
      <Footer />
    </main>
  );
};

export default Home;
