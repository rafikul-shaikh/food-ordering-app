import React from "react";
import Navbar from "../component/Navbar";
import CategorySlider from "../component/CategorySlider";
import SearchBar from "../component/SearchBar";
import MenuSection from "../component/MenuSection";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <CategorySlider />
        <SearchBar />
        <MenuSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
