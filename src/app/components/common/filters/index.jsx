"use client";
import { Covered_By_Your_Grace, Manrope } from "next/font/google";
import React, { useState } from "react";
const categories = [
  "All",
  "Mobile App Designs",
  "Mockups Designs",
  "Banners/Flyers",
  "Logos",
  "Visiting Cards",
  "Wireframes",
  "Dashboard",
  "Portfolios",
];
const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: "300",
});
const items = [
  {
    id: 1,
    category: "Mobile App Designs",
    src: "/images/categories/mobile-app-design.png",
  },
  {
    id: 2,
    category: "Mockups Designs",
    src: "/images/categories/mockups-design.png",
  },
  {
    id: 3,
    category: "Banners/Flyers",
    src: "/images/categories/banners-flyers.png",
  },
  { id: 4, category: "Logos", src: "/images/categories/logos.png" },
  {
    id: 5,
    category: "Visiting Cards",
    src: "/images/categories/visiting-cards.png",
  },
  { id: 6, category: "Wireframes", src: "/images/categories/wireframes.png" },
  { id: 7, category: "Dashboard", src: "/images/categories/dashboard.png" },
  { id: 8, category: "Portfolios", src: "/images/categories/portfolios.png" },
];

const FilterComponent = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div id="filter" className="px-5 py-10 lg:p-20 2xl:px-36">
      <h1
        className={`text-5xl mb-10 md:text-6xl text-center font-inter font-normal md:mb-10 ${manrope.className}`}
      >
        Done for{" "}
        <span className={`text-orange-600 ${coveredByYourGrace.className}`}>
          you
        </span>
      </h1>
      <div className="flex overflow-x-auto xl:overflow-visible gap-4 whitespace-nowrap pb-6 md:mb-5 md:gap-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">        {categories?.map((category, index) => (
          <button
            key={index}
            className={`px-1.5 py-1 md:px-4 md:py-1.5 ${
              activeCategory === category
                ? "bg-orange-600 border-2 border-black rounded-xl transition ease-in duration-300"
                : "bg-transparent"
            }`}
            style={
              activeCategory === category
                ? { boxShadow: "3px 3px 0px 0px #767676" }
                : {}
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-y-20 gap-x-10 mt-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="overflow-hidden">
            <img src={item.src} alt={item.category} className="w-full h-auto" />
            <p className="text-xl font-medium mt-4 ">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
