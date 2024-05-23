"use client";
import React from "react";
// import { useTranslation } from "react-i18next";

interface ProductDetails {
  title: string;
  description: string;
  thumbnail: string;
  id: number;
}

interface ProductProps {
  product: ProductDetails;
  handleClick: (product: ProductDetails) => void;
}

const Product: React.FC<ProductProps> = ({ product, handleClick }) => {
  // const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg p-4 h-[32rem] flex flex-col ">
      <div className="max-w-[20rem] mx-auto h-[15rem]  overflow-hidden">
        <img
          className="rounded-lg max-h-[15rem]"
          src={product.thumbnail}
          alt="productphoto"
        />
      </div>
      <div className="w-[20rem] mx-auto mt-[1rem] flex flex-col">
        <div className="text-[1.4rem] font-semibold">{product.title}</div>
        <div className="text-gray-700 mt-[0.5rem]">{product.description}</div>
      </div>
      {/* <a
        href={`/landing/${product.id}`}
        className="w-full block bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none mt-auto"
      >
        {t("addToCard")}
      </a> */}
      <button
        onClick={() => handleClick(product)}
        className="w-full block bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none mt-auto"
      >
        Add to the cart
      </button>
    </div>
  );
};

export default Product;
