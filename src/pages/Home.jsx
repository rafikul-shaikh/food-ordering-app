import Navbar from "../component/Navbar";
import CategorySlider from "../component/CategorySlider";
import SearchBar from "../component/SearchBar";
import MenuSection from "../component/MenuSection";
import Footer from "../component/Footer";
import { useState } from "react";
import { menuItems } from "../data/menuItems";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const filteredItems = menuItems.filter(
    (items) =>
      items.name.toLowerCase().includes(searchText.toLowerCase()) ||
      items.category.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <CategorySlider />
        <SearchBar searchText={searchText} setSearchText={searchText} />
        <MenuSection items={filteredItems} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
