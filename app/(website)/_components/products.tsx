import React, { useState } from "react";
import Product from "./product";
import useLocalStorage from "../_hooks/useLocalStorage";

interface GameData {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface ProductsProps {
  gameData: GameData[];
}

interface SelectedProduct {
  id: number;
  count: number;
}

const Products: React.FC<ProductsProps> = ({ gameData }) => {
  const [selectedProducts, setSelectedProducts] = useLocalStorage<
    SelectedProduct[]
  >("selectedProducts", []);
  const [productsSum, setProductsSum] = useLocalStorage<number>("sum", 0);

  console.log(selectedProducts);
  const handleClick = (product: GameData) => {
    let selectedProduct = selectedProducts.find((obj) => obj.id === product.id);

    if (!selectedProduct) {
      setSelectedProducts((prev) => [...prev, { id: product.id, count: 1 }]);
    } else {
      setSelectedProducts((prev) =>
        prev.map((obj) =>
          obj.id === product.id ? { ...obj, count: obj.count + 1 } : obj
        )
      );
    }
    let sum = selectedProducts.reduce((total, obj) => total + obj.count, 0);
    setProductsSum(sum);
  };

  return (
    <div className="flex justify-center">
      <div className="  w-[3rem] rounded-2xl absolute right-[5rem]">
        <a href="/cart">
          <img src="assets/cart.svg" alt="" />
          <span className="absolute right-[-1rem] top-[-1rem] text-white">
            {productsSum}
          </span>
        </a>
      </div>
      <div className="overflow-y-scroll h-[34rem] w-[124rem] mt-[1rem]">
        <div className="grid grid-cols-5 gap-4 p-4">
          {gameData?.map((game) => (
            <Product key={game.id} product={game} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
