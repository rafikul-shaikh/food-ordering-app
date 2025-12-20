import React from "react";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

const rotatingWords = [" 'Kebabs'", "'Fish Kebabs'", "'Veg Kebabs'"];

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);

  // Rotate placeholder text
  useEffect(() => {
    // stop rotation when user types
    if (value.trim() !== "") return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, [value]);

  const placeholderText =
    value.trim() === "" ? `Search for ${rotatingWords[index]}` : "Search";

  return (
    <div className="w-full bg-white ">
      <div className="max-w-7xl mx-auto mb-10 px-35 py-3">
        <h2 className="text-2xl font-semibold mt-6 mb-8">Explore our Items</h2>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-5" />
          <input
            type="text"
            // value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={placeholderText}
            className="w-full border border-gray-300 mb-4 px-12 py-4 rounded-md
                     focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
