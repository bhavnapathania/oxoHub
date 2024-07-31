import React from "react";

function Form({ btnLabel, placeholderText, icon}) {
  return (
    <div className="w-[100%] bg-white shadow-lg py-8 px-12 rounded-lg">
      <div className="mb-4">
        <select className="block w-full p-6 border-b-2 border-orange-500 focus:outline-none">
          <option>Select Logo</option>
          <option>Logo 1</option>
          <option>Logo 2</option>
          <option>Logo 3</option>
        </select>
      </div>

      <div className="mb-4">
        <textarea
          className="block w-full p-6 pb-12 border-b-2 border-gray-300 focus:outline-none placeholder:text-gray-400 "
          placeholder={placeholderText}
        />
      </div>

      <div className="flex items-center justify-center">
        <button className="text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded  flex items-center justify-center">
        {btnLabel}
          <img src={icon} alt="" className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Form;
