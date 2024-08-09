"use client"
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
    <div className="p-20 2xl:px-36">
      <h1 className="text-3xl text-center font-inter font-light mb-10">
        Done for <span className="text-orange-400 font-semibold">You</span>
      </h1>
      <div className="flex justify-between mb-5">
        {categories.map((category ,index) => (
          <button
            key={index}
            className={`px-4 py-1.5 mx-2 ${
              activeCategory === category
                ? "bg-orange-500 border-2 border-black rounded-xl transition ease-in duration-300"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10 mt-14">
        {filteredItems.map((item) => (
          <div key={item.id} className="border rounded overflow-hidden">
            <img src={item.src} alt={item.category} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
