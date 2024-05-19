"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ProductProps {
  name: string;
  description: string;
  image: string;
  id: string;
}

const Product: React.FC<ProductProps> = ({ name, description, image, id }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg p-4 h-[32rem] flex flex-col ">
      <div className="max-w-[20rem] mx-auto h-[15rem]  overflow-hidden">
        <img
          className="rounded-lg max-h-[15rem]"
          src={image}
          alt="productphoto"
        />
      </div>
      <div className="w-[20rem] mx-auto mt-[1rem] flex flex-col">
        <div className="text-[1.4rem] font-semibold">{name}</div>
        <div className="text-gray-700 mt-[0.5rem]">{description}</div>
      </div>
      <a
        href={`/landing/${id}`}
        className="w-full block bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none mt-auto"
      >
        {t("addToCard")}
      </a>
    </div>
  );
};

export default Product;