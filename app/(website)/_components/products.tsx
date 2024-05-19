import React from "react";
import Product from "./product";

interface GameData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface ProductsProps {
  gameData: GameData[];
}

const Products: React.FC<ProductsProps> = ({ gameData }) => {
  return (
    <div className="flex justify-center">
      <div className="overflow-y-scroll h-[34rem] w-[124rem] mt-[1rem]">
        <div className="grid grid-cols-5 gap-4 p-4">
          {gameData?.map((game) => (
            <Product
              key={game.id}
              id={game.id}
              name={game.title}
              description={game.description}
              image={game.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
