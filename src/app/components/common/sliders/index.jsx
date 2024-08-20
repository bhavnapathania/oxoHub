"use client";
import { Covered_By_Your_Grace } from "next/font/google";
import React from "react";
import Slider from "react-slick";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});
const Sliders = ({ images1, images2 }) => {
  const settingsRight = {
    dots: false,
    infinite: true,
    speed: 2000, // Increase speed for continuous sliding effect
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous sliding
    cssEase: "linear", // Use linear for smooth, consistent sliding
    rtl: false, // Right to left is false
    pauseOnHover: false, // Don't pause on hover
    pauseOnFocus: false, // Don't pause on focus
  };

  const settingsLeft = {
    dots: false,
    infinite: true,
    speed: 2000, // Increase speed for continuous sliding effect
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous sliding
    cssEase: "linear", // Use linear for smooth, consistent sliding
    rtl: true, // Right to left is true
    pauseOnHover: false, // Don't pause on hover
    pauseOnFocus: false, // Don't pause on focus
  };

  return (
    <div className="md:text-center px-5 py-12">
      <h2 className="text-4xl md:text-6xl font-normal pb-10">
        Our Happy <span className={`text-orange-400 ${coveredByYourGrace.className}`}>Customers</span>
      </h2>
      <div className="mb-8">
        <Slider {...settingsRight}>
          {images1?.map((image, index) => (
            <div key={index} className="slide px-2 md:p-4">
              <img
                src={image?.src}
                alt={`Customer ${index + 1}`}
                className="mx-auto h-24"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <Slider {...settingsLeft}>
          {images2?.map((image, index) => (
            <div key={index} className="slide px-2 md:p-4">
              <img
                src={image?.src}
                alt={`Customer ${index + 1}`}
                className="mx-auto h-24"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
