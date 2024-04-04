import React from "react";
import Product from "./product";

export default function Products({ gameData }) {
  return (
    <div className="flex justify-center">
      <div className="overflow-y-scroll h-[34rem] w-[124rem] mt-[1rem]">
        <div className="grid grid-cols-5 gap-4 p-4">
          {gameData?.map((game) => (
            <Product
              key={game.id}
              name={game.name}
              description={game.description}
              image={game.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
