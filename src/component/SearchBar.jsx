import React from "react";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const rotatingWords = ["'Kebabs'", "'Fish Kebabs'", "'Veg Kebabs'"];

const SearchBar = ({ searchText, setSearchText }) => {
  const [placeholderText, setPlaceholderText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (searchText.trim() !== "") return;
    const currentWord = rotatingWords[wordIndex];

    let timeout;

    if (!isDeleting) {
      if (charIndex === currentWord.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setPlaceholderText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 120);

      if (charIndex === currentWord.length && !isDeleting) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    } else {
      /*
        DELETING MODE
        Decrease charIndex → remove characters
      */
      timeout = setTimeout(() => {
        setPlaceholderText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 80);

      /*
        When word is fully deleted → move to next word
      */
      if (charIndex === 0) {
        setIsDeleting(false);
        setPlaceholderText("");
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }
    }

    /*
      Cleanup timeout to avoid memory leaks
    */
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, searchText]);

  return (
    <div className="w-full bg-white ">
      <div className="max-w-5xl mx-auto mb-4 px-4 sm:px-6 lg:px-4 ">
        <h2 className="text-2xl font-semibold mt-2 mb-4">Explore our Items</h2>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-5" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={`Search for ${placeholderText}`}
            className="w-full border border-gray-300 mb-4 px-12 py-4 rounded-md
                     focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
