import React from "react";
import Navbar from "../component/Navbar";
import CategorySlider from "../component/CategorySlider";
import SearchBar from "../component/SearchBar";
import MenuSection from "../component/MenuSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <CategorySlider />
        <SearchBar />
        <MenuSection />
      </main>
    </>
  );
};

export default Home;
