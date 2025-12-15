import React from "react";
import CategoryCard from "./CategoryCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-8">
            Explore our Categories
          </h2>

          <div className="flex items-center justify-between gap-6">
            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-200">
              <ArrowLeft />
            </button>

            <div className="flex gap-10 overflow-x-auto scrollbar-hide">
              <CategoryCard
                title="Chicken Kebabs"
                img="https://static.vecteezy.com/system/resources/previews/048/783/251/non_2x/chicken-kebab-skewers-on-a-plate-free-png.png"
              />
              <CategoryCard title="Fish Kebabs" />
              <CategoryCard title="Veg Kebabs" />
              <CategoryCard title="Kolkata Style Biryani" />
              <CategoryCard title="Home Style Bengali Thalis" />
              <CategoryCard title="Fish Heaven" />
              <CategoryCard title="Main Course" />
              <CategoryCard title="Bread & Rice" />
            </div>

            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-200">
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
