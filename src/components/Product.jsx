import React from "react";

export default function Product({ name, description, image }) {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="max-w-[20rem] mx-auto ">
        <img className="rounded-lg" src={image} alt="productphoto" />
      </div>
      <div className="w-[20rem] mx-auto mt-[1rem]">
        <div className="text-[1.4rem] font-semibold">{name}</div>
        <div className="text-gray-700 mt-[0.5rem]">{description}</div>
        <button className="w-full mt-[0.5rem] bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
