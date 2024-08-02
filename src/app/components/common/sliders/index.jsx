"use client";
import React from "react";
import Slider from "react-slick";

const Sliders = ({ images1, images2 }) => {
  const settingsRight = {
    dots: false,
    infinite: true,
    speed: 500, // Adjust speed for smooth transition
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time in ms between each slide transition
    cssEase: "ease-in-out", // Smoother transition effect
    rtl: false, // Right to left is false
  };

  const settingsLeft = {
    dots: false,
    infinite: true,
    speed: 500, // Adjust speed for smooth transition
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time in ms between each slide transition
    cssEase: "ease-in-out", // Smoother transition effect
    rtl: true, // Right to left is true
  };

  return (
    <div className="text-center py-12">
      <h2 className="text-4xl font-normal pb-10">
        Our happy <span className="text-orange-500">Customers</span>
      </h2>
      <div className="mb-8">
        <Slider {...settingsRight}>
          {images1?.map((image, index) => (
            <div key={index} className="slide p-4">
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
            <div key={index} className="slide p-4">
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
