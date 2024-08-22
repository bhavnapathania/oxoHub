import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Form({ btnLabel, placeholderText, icon, options }) {
  return (
    <div className="w-[100%] mx-5 md:mx-0 bg-white shadow-lg p-6 md:py-8 md:px-12 rounded-lg">
      <div className="mb-4">
        <input
          className="block w-full p-2 border-b-2 border-orange-500 focus:outline-none"
          placeholder="Enter your email"
          type="email"
        />
      </div>
      <div className="mb-4">
        <select className="block w-full p-2 border-b-2 border-orange-500 focus:outline-none">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <textarea
          rows={2}
          className="block w-full p-2 pb-12 border-b-2 border-orange-500 focus:outline-none placeholder:text-gray-400 "
          placeholder={placeholderText}
        />
      </div>

      <div className="flex items-center justify-center">
        <button className="text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded  flex items-center justify-center hover:bg-orange-600 hover:text-white">
          {btnLabel}
          <BsArrowRight size = {30} className="ml-2"/>
        </button>
      </div>
    </div>
  );
}

export default Form;
