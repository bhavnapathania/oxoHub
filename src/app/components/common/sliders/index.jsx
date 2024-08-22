"use client";
import { Covered_By_Your_Grace, Manrope } from "next/font/google";
import React from "react";
import Slider from "react-slick";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: "300",
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="text-center px-5 py-8 md:py-0">
      <h2
        className={`text-4xl md:text-6xl font-normal pb-10 ${manrope.className}`}
      >
        Our Happy{" "}
        <span className={`text-orange-600 ${coveredByYourGrace.className}`}>
          Customers
        </span>
      </h2>
      <div className="mb-8">
        <Slider {...settingsRight}>
          {images1?.map((image, index) => (
            <div key={index} className="slide px-2 md:p-4">
              <img
                src={image?.src}
                alt={`Customer ${index + 1}`}
                className="mx-auto h-12 md:h-24"
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
                className="mx-auto h-12 md:h-24"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
