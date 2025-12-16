import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-35 py-3">
        <h2 className="text-2xl font-semibold mt-6 mb-8">Explore our Items</h2>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-5" />
          <input
            type="text"
            placeholder="Search for 'Veg Thali'"
            aria-label="Search food items"
            className="w-full border border-gray-300 px-12 py-4 rounded-md
                     focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
