import React from "react";
import CategoryCard from "./CategoryCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CategorySlider = () => {
  return (
    <>
      <section className="w-full bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-35 py-3 border-b border-gray-300">
          <h2 className="text-2xl font-semibold mb-8">
            Explore our Categories
          </h2>

          <div className="flex items-center justify-between gap-10">
            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-200">
              <ArrowLeft />
            </button>

            <div className="flex gap-20 overflow-x-hidden">
              <CategoryCard
                title="Chicken Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880596540442483873_2142333979481837_215488358446462570_n.jpg"
              />
              <CategoryCard
                title="Fish Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880582881444503437_2142333469481888_7176353247881770058_n.jpg"
              />
              <CategoryCard
                title="Veg Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880561517444456937_2142333822815186_2478446153660797015_n.jpg"
              />
              <CategoryCard
                title="Kolkata Style Biryani"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880554559441950841_2142334966148405_2113571774599989178_n.jpg"
              />
              <CategoryCard
                title="Home Style Bengali Thalis"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880544574441583064_2142334792815089_2110740259659572292_n.jpg"
              />
              <CategoryCard
                title="Fish Heaven"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880533166436209762_2142333656148536_5830337820395195328_n.jpg"
              />
              <CategoryCard
                title="Main Course"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880184197441238154_2142332386148663_8827173347457303737_n.jpghttps://backend.caledonkababs.com/uploads/categoryImage/1715880184197441238154_2142332386148663_8827173347457303737_n.jpg"
              />
              <CategoryCard
                title="Bread & Rice"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880429538436221467_2142333172815251_8072771052593921302_n.jpg"
              />
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

export default CategorySlider;
