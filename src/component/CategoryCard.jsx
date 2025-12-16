import React from "react";

const CategoryCard = ({ img, title }) => {
  return (
    <>
      <div className="flex flex-col items-center min-w-37.5">
        <img
          src={img}
          // alt={title}
          className="w-32 h-32 rounded-full object-cover mb-3"
        />
        <p className="text-sm font-medium text-center">{title}</p>
      </div>
    </>
  );
};

export default CategoryCard;
