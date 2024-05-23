import React from "react";
import useLocalStorage from "../_hooks/useLocalStorage";

interface SelectedProduct {
  id: number;
  count: number;
}
export default function page() {
  const [selectedProducts, setSelectedProducts] = useLocalStorage<
    SelectedProduct[]
  >("selectedProducts", []);

  return (
    <div className="flex justify-center">
      <div className="overflow-y-scroll h-[34rem] w-[124rem] mt-[1rem]">
        <div className="flex flex-col">
          {/* {gameData?.map((game) => (
        <Product key={game.id} product={game} handleClick={handleClick} />
      ))} */}
        </div>
      </div>
    </div>
  );
}
