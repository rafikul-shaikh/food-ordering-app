import React from "react";
import { useRef, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CategorySlider = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const cardWidth = slider.firstElementChild?.offsetWidth || 300;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      // RESET first, then return (NO smooth here)
      if (slider.scrollLeft + cardWidth >= maxScroll) {
        slider.scrollLeft = 0;
        return;
      }

      // Smooth scroll ONLY here
      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const slider = sliderRef.current;
  //     if (!slider) return;

  //     const halfWidth = slider.scrollWidth / 2;

  //     // silent reset (no animation)
  //     if (slider.scrollLeft >= halfWidth) {
  //       slider.scrollLeft = 0;
  //     }

  //     slider.scrollBy({
  //       left: 300,
  //       behavior: "smooth",
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction * 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="w-full bg-white ">
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-2xl font-semibold mt-3 mb-8">
            Explore our Categories
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              className="flex w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full bg-gray-200"
            >
              <ArrowLeft />
            </button>

            <div
              ref={sliderRef}
              className="flex-1 flex gap-4 sm:gap-6 md:gap-12 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
            >
              {/* Original Category */}
              <CategoryCard
                title="Chicken Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880596540442483873_2142333979481837_215488358446462570_n.jpg"
                targetId="Chicken-Kebabs"
              />
              <CategoryCard
                title="Fish Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880582881444503437_2142333469481888_7176353247881770058_n.jpg"
                targetId="Fish-Kebabs"
              />
              <CategoryCard
                title="Veg Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880561517444456937_2142333822815186_2478446153660797015_n.jpg"
                targetId="Veg-Kebabs"
              />
              <CategoryCard
                title="Kolkata Style Biryani"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880554559441950841_2142334966148405_2113571774599989178_n.jpg"
                targetId="Kolkata Style Biryani"
              />
              <CategoryCard
                title="Home Style Bengali Thalis"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880544574441583064_2142334792815089_2110740259659572292_n.jpg"
                targetId="Home Style Bengali Thalis"
              />
              <CategoryCard
                title="Fish Heaven"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880533166436209762_2142333656148536_5830337820395195328_n.jpg"
                targetId="Fish Heaven"
              />
              <CategoryCard
                title="Main Course"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880184197441238154_2142332386148663_8827173347457303737_n.jpg"
                targetId="Main Course"
              />
              <CategoryCard
                title="Bread & Rice"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880429538436221467_2142333172815251_8072771052593921302_n.jpg"
                targetId="Bread & Rice"
              />
              {/* Duplicate Category Just to autoplay */}
              <CategoryCard
                title="Chicken Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880596540442483873_2142333979481837_215488358446462570_n.jpg"
                targetId="Chicken-Kebabs"
              />
              <CategoryCard
                title="Fish Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880582881444503437_2142333469481888_7176353247881770058_n.jpg"
                targetId="Fish-Kebabs"
              />
              <CategoryCard
                title="Veg Kebabs"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880561517444456937_2142333822815186_2478446153660797015_n.jpg"
                targetId="Veg-Kebabs"
              />
              <CategoryCard
                title="Kolkata Style Biryani"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880554559441950841_2142334966148405_2113571774599989178_n.jpg"
                targetId="Kolkata Style Biryani"
              />
              <CategoryCard
                title="Home Style Bengali Thalis"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880544574441583064_2142334792815089_2110740259659572292_n.jpg"
                targetId="Home Style Bengali Thalis"
              />
              <CategoryCard
                title="Fish Heaven"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880533166436209762_2142333656148536_5830337820395195328_n.jpg"
                targetId="Fish Heaven"
              />
              <CategoryCard
                title="Main Course"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880184197441238154_2142332386148663_8827173347457303737_n.jpg"
                targetId="Main Course"
              />
              <CategoryCard
                title="Bread & Rice"
                img="https://backend.caledonkababs.com/uploads/categoryImage/1715880429538436221467_2142333172815251_8072771052593921302_n.jpg"
                targetId="Bread & Rice"
              />
            </div>

            <button
              onClick={() => scroll(1)}
              className="shrink-0 flex w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full bg-gray-200"
            >
              <ArrowRight />
            </button>
          </div>
          <hr className="my-6 px-4 mx-auto border-gray-300" />
        </div>
      </section>
    </>
  );
};

export default CategorySlider;
