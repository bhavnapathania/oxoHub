import React from "react";

function HeroSection() {
  return (
    <section className="flex justify-between items-center">
      <div className="w-[50%]">
        <h2 className="text-6xl font-extralight">
          We design <span className="text-orange-500">experiences</span> that
          move businesses to the{" "}
          <span className="text-orange-500">future.</span>
        </h2>
      </div>
      <img className="w-[45%]" src="/images/others/hero.png" alt="" />
    </section>
  );
}

export default HeroSection;
