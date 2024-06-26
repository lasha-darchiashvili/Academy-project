"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Product {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
}

interface ProductItemProps {
  id: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ id }) => {
  const { t } = useTranslation();
  const [gameData, setGameData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setGameData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  console.log(gameData);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-[3rem] text-red-500">{t("Loading")}</div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-[2rem] items-center w-full mt-[3rem]">
        <div className="flex flex-row gap-[2rem] bg-custom-second-blue w-[120rem] rounded-2xl">
          <div className="w-3/5">
            <img className="w-full" src={gameData?.thumbnail} alt="photo" />
          </div>
          <div className="w-2/5 flex flex-col gap-[2rem] mt-[3rem] text-white">
            <p className="text-[2rem] mt-[2rem] mb-[2rem]">{gameData?.title}</p>
            <p>{gameData?.description}</p>
            <div className="flex flex-col gap-[1rem] text-[1.4rem]">
              <p>
                <span>{t("productItemPrice")}</span>:{" "}
                <span>{gameData?.price} $</span>
              </p>
              <p>
                <span>{t("productItemDiscount")}</span>:{" "}
                <span>{gameData?.discountPercentage} %</span>
              </p>
              <p>
                <span>{t("productItemRating")}</span>:{" "}
                <span>
                  {gameData?.rating} {t("productItemPoints")}
                </span>
              </p>
              <p>
                {" "}
                <span>{t("productItemBrand")}</span>:{" "}
                <span>{gameData?.brand}</span>
              </p>
              <p>
                {" "}
                <span>{t("productItemCategory")}</span>:{" "}
                <span>{gameData?.category}</span>
              </p>{" "}
            </div>
            <div className="mt-auto">
              <a
                className="bg-gray-500 block w-[10rem] ml-auto text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none mb-[1rem] mr-[1rem]"
                href="/landing"
              >
                {t("productItemGoBack")}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductItem;
