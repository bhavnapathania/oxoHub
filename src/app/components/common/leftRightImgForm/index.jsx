import React from "react";
import Form from "../form";
import { Covered_By_Your_Grace, Manrope } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: "300",
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
    <section id="form" className="w-full flex justify-between flex-col items-center gap-10 py-8 px-5 md:flex-row md:gap-0 md:h-[100vh] relative md:px-20 2xl:px-36">
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          backgroundImage: 'url("/images/others/bgVisuals.png")',
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[100%] flex flex-col gap-6 md:w-[45%] relative">
        <div className="text-center md:text-start flex flex-col gap-6 md:w-[80%]">
          <h2
            className={`text-4xl  md:text-5xl font-normal ${manrope.className}`}
          >
            {title}{" "}
            <span className={`text-orange-600 ${coveredByYourGrace.className}`}>
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
      <div className="flex justify-center  items-center p-14 md:p-0 h-auto md:w-[70vh] md:h-[65vh]">
        <img className="" src={url} alt="" />
      </div>
    </section>
  );
}

export default LeftRightImgForm;
