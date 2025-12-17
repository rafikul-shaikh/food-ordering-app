import React from "react";
import Navbar from "../component/Navbar";
import CategorySlider from "../component/CategorySlider";
import SearchBar from "../component/SearchBar";
import MenuSection from "../component/MenuSection";

const home = () => {
  return (
    <>
      <Navbar />
      <CategorySlider />
      <SearchBar />
      <MenuSection />
    </>
  );
};

export default home;
