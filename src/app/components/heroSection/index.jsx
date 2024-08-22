"use client";
import { Covered_By_Your_Grace, Manrope } from "next/font/google";
import React, { useState } from "react";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: "200",
});
function HeroSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section
      className="relative flex justify-between items-stretch md:h-[74h] bg-center bg-contain"
      style={{
        backgroundImage: 'url("/images/others/bgVisuals.png")',
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col md:gap-10 md:flex-row justify-between items-center px-5 mt-20 md:mt-40 2xl:mt-28 lg:px-20 2xl:px-36 w-full"
      >
        <div className="md:w-[50%] mt-10 md:mt-0 relative flex flex-col gap-6 md:gap-12">
          {isHovering && (
            <div
              className="-z-20 absolute w-40 h-40 opacity-60 rounded-full pointer-events-none transition-transform duration-100"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, rgba(255, 165, 0, 0) 70%)",
                left: `${position.x- 160}px`,
                top: `${position.y - 160}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}

          <div className="flex justify-between items-center">
            <span className="transform rotate-12 bg-orange-500 text-black rounded-xl px-4 py-2 text-xs font-bold">
              YOUR IDEA STARTS HERE
            </span>
            <img
              src="/images/icons/dice.svg"
              alt="Dice"
              className="w-20 h-20"
            />
          </div>

          <h2
            className={`text-4xl  md:text-6xl xl:text-7xl font-extralight ${manrope.className}`}
          >
            We design{" "}
            <span className={`text-orange-400 ${coveredByYourGrace.className}`}>
              experiences
            </span>{" "}
            that move businesses to the{" "}
            <span className={`text-orange-400 ${coveredByYourGrace.className}`}>
              future.
            </span>
          </h2>
        </div>

        {/* New code to add the background image */}
        <div className="relative md:w-[40vw]  p-10 md:p-0">
          <img
            className="absolute w-full h-auto top-0 left-0 z-0 opacity-70"
            src="/images/others/orangeFlare.png"
            alt="Background Ellipse"
          />
          <img
            className="relative z-10 w-full"
            src="/images/others/newHero.png"
            alt="Main Graphic"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
