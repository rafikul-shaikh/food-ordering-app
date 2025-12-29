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
      className="
        flex flex-col items-center cursor-pointer
       min-w-27.5 sm:min-w-32.5 md:min-w-37.5
      "
    >
      <img
        src={img}
        alt={title}
        className="
          w-20 h-20
          sm:w-24 sm:h-24
          md:w-32 md:h-32
          rounded-full object-cover mb-3
        "
      />
      <p className="text-xs sm:text-sm font-medium text-center">{title}</p>
    </div>
  );
};

export default CategoryCard;
