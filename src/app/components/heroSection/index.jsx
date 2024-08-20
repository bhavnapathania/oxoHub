import { Covered_By_Your_Grace } from "next/font/google";
import React from "react";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

function HeroSection() {
  return (
    <section
      className="relative flex justify-between items-stretch h-[74h] bg-center bg-contain"
      style={{
        backgroundImage: 'url("/images/others/bgVisuals.png")',
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col-reverse gap-10 md:flex-row justify-between items-center py-10 px-5 md:px-20 mt-20 md:mt-40 2xl:mt-40 2xl:px-36 w-full">
        <div className="md:w-[50%] mt-20 md:mt-0 relative flex flex-col gap-6">
          <img
            src="/images/icons/dice.svg"
            alt="Dice"
            className="h-10 md:w-20 md:h-20 absolute top-[-50%] right-10 "
          />
          <h2 className="text-4xl md:text-6xl font-extralight">
            We design{" "}
            <span className={`text-orange-400 ${coveredByYourGrace.className}`}>
              experiences
            </span>{" "}
            that move businesses to the{" "}
            <span className={`text-orange-400 ${coveredByYourGrace.className}`}>
              future.
            </span>
          </h2>
          <div className="absolute top-[-40%] transform rotate-12 bg-orange-500 text-black rounded-xl px-4 py-2 text-xs font-bold">
            YOUR IDEA STARTS HERE
          </div>
        </div>

        {/* New code to add the background image */}
        <div className="relative md:w-[40vw]">
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
