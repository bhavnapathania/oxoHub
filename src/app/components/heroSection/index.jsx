import React from "react";

function HeroSection() {
  return (
    <section
      className="flex justify-between items-stretch h-[100vh] bg-center bg-contain"
      style={{
        backgroundImage: 'url("/images/others/bgVisuals.png")',
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between items-center px-20 mt-80">
        <div className="w-[50%] relative flex flex-col gap-6">
          <img
            src="/images/icons/dice.svg"
            alt="Dice"
            className="w-20 h-20 absolute top-[-50%] right-10 "
          />
          <h2 className="text-6xl font-extralight">
            We design <span className="text-orange-500">experiences</span> that
            move businesses to the{" "}
            <span className="text-orange-500">future.</span>
          </h2>
          <div className="absolute top-[-40%] transform rotate-12 bg-orange-500 text-black rounded-xl px-4 py-2 text-xs font-bold">
            YOUR IDEA STARTS HERE
          </div>
        </div>
        <img
          className="w-[45%]"
          src="/images/others/hero.png"
          alt="Main Graphic"
        />
      </div>
    </section>
  );
}

export default HeroSection;
