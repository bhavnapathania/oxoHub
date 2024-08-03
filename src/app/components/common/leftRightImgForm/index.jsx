import React from "react";
import Form from "../form";

function LeftRightImgForm({
  title,
  coloredText,
  boldDescription,
  description,
  url,
}) {
  return (
    <section className="w-full flex justify-between items-center h-[100vh] relative px-20">
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          backgroundImage: 'url("/images/others/bgVisuals.png")',
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex flex-col gap-6 w-[55%] relative">
        <div className="flex flex-col gap-6 w-[80%]">
          <h2 className="text-4xl font-normal">
            {title} <span className="text-orange-500">{coloredText}</span>
          </h2>
          <p className="text-lg font-[400]">
            <span className="font-[600]">{boldDescription}</span>
            {description}
          </p>
        </div>
        <div>
          <Form
            placeholderText={"Please write your message here..."}
            btnLabel={"Book Your Order"}
            icon={"/images/icons/arrow.svg"}
          />
        </div>
      </div>
      <img className="" src={url} alt="" />
    </section>
  );
}

export default LeftRightImgForm;
