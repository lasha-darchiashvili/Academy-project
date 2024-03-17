import React from "react";
import ac from "../assets/ac.webp";

export default function Product() {
  return (
    <div class="bg-white rounded-lg p-4">
      <div className="w-[20rem] mx-auto ">
        <img className="rounded-lg" src={ac} alt="productphoto" />
      </div>
      <div className="w-[20rem] mx-auto mt-[1rem]">
        <div class="text-[1.4rem] font-semibold">Assassin's Creed</div>
        <div class="text-gray-700 mt-[0.5rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          ipsa numquam sed voluptas dolore eaque provident error, quo nam
          incidunt esse expedita consequatur necessitatibus.
        </div>
        <button class="w-full mt-[0.5rem] bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
