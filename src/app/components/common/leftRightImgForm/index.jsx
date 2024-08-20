import React from "react";
import Form from "../form";
import { Covered_By_Your_Grace } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});
const options = [
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

function LeftRightImgForm({
  title,
  coloredText,
  boldDescription,
  description,
  url,
}) {
  return (
    <section className="w-full flex justify-between flex-col items-center gap-10 px-5 md:flex-row md:gap-0 md:h-[100vh] relative md:px-20 2xl:px-36">
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          backgroundImage: 'url("/images/others/bgVisuals.png")',
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[100%] flex flex-col gap-6 md:w-[45%] relative">
        <div className="flex flex-col gap-6 w-[80%]">
          <h2 className="text-4xl font-normal">
            {title}{" "}
            <span className={`text-orange-400 ${coveredByYourGrace.className}`}>
              {coloredText}
            </span>
          </h2>
          <p className="text-lg font-[400]">
            <span className="font-[600]">{boldDescription}</span>
            {description}
          </p>
        </div>
        <div className="flex justify-center">
          <Form
            placeholderText={"Please write your message here..."}
            btnLabel={"Book Your Order"}
            icon={"/images/icons/arrow.svg"}
            options={options}
          />
        </div>
      </div>
      <img className="p-8 md:p-0" src={url} alt="" />
    </section>
  );
}

export default LeftRightImgForm;
