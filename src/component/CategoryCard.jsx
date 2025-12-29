import React from "react";

const CategoryCard = ({ img, title, targetId }) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="shrink-0 w-[48%] sm:w-[45%] md:w-[22%] snap-start text-center cursor-pointer"
    >
      {/* Image wrapper */}
      <div className="flex justify-center">
        <img
          src={img}
          alt={title}
          className=" w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover"
        />
      </div>
      <p className="mt-3 text-xs sm:text-sm font-medium">{title}</p>
    </div>
  );
};

export default CategoryCard;
