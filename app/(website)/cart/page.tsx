"use client";
import React from "react";
import useLocalStorage from "../_hooks/useLocalStorage";
import { useState, useEffect } from "react";
import CartProduct from "./components/cartProduct";

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface SelectedProduct {
  id: number;
  count: number;
  product: Product;
}
const Cart: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useLocalStorage<
    SelectedProduct[]
  >("selectedProducts", []);

  const [cartProducts, setCartProducts] = useState<SelectedProduct[]>([]);

  useEffect(() => {
    const products = selectedProducts.map((selectedProduct) => {
      return selectedProduct;
    });
    setCartProducts(products);
  }, [selectedProducts]);

  const handleClick = () => {
    setCartProducts([]);
    setSelectedProducts([]);
    localStorage.removeItem("selectedProducts");
  };

  const handleIncriment = (product: Product) => {
    setSelectedProducts((prev) =>
      prev.map((obj) =>
        obj.id === product.id ? { ...obj, count: obj.count + 1 } : obj
      )
    );
  };
  const handleDecrement = (product: Product) => {
    setSelectedProducts((prev) =>
      prev.map(
        (obj) =>
          obj.id === product.id && obj.count > 0 // Check if count is greater than 0
            ? { ...obj, count: obj.count - 1 } // Decrement count if greater than 0
            : obj // Otherwise, return the object as it is
      )
    );
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="bg-gray-300 text-gray-800 px-4 py-2 h-[4rem] rounded-md hover:bg-gray-400 transition-colors"
      >
        Empty cart
      </button>

      <div className="overflow-y-auto h-[34rem] w-[124rem] mt-[1rem] pr-[2rem] pl-[2rem]">
        <div className="flex flex-col">
          {cartProducts.length === 0 ? (
            <p className="text-center text-gray-500 italic mt-8">
              Your cart is empty.
            </p>
          ) : (
            cartProducts.map((selectedProduct) => (
              <CartProduct
                selectedProduct={selectedProduct}
                key={selectedProduct.id}
                handleIncriment={handleIncriment}
                handleDecrement={handleDecrement}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
