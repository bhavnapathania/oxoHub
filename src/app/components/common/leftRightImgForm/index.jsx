import React from "react";

function LeftRightImgForm({ title, coloredText, description, url }) {
  return (
    <section className="w-full flex justify-between">
      <div>
        <div className="flex flex-col gap-6 w-[80%]">
          <h2 className="text-4xl font-normal">
            {title} <span className="text-orange-500">{coloredText}</span>
          </h2>
          <p className="text-lg font-bold">{description}</p>
        </div>
        <div></div>
      </div>
      <img className="" src={url} alt="" />
    </section>
  );
}

export default LeftRightImgForm;
