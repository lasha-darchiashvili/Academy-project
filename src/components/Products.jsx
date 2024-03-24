import React from "react";
import Product from "../components/Product";
import assassinImage from "../assets/ac.webp";

export default function Products() {
  const gameData = {
    name: "Assassin's creed",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ipsa numquam sed voluptas dolore eaque provident error, quo nam incidunt esse expedita consequatur necessitatibus",
    image: assassinImage,
  };
  return (
    <div class="flex justify-center">
      <div className="overflow-y-scroll h-[34rem] w-[124rem] mt-[1rem]">
        <div class="grid grid-cols-5 gap-4 p-4">
          <Product
            name={gameData.name}
            description={gameData.description}
            image={gameData.image}
          />
          <Product
            name={gameData.name}
            description={gameData.description}
            image={gameData.image}
          />
          <Product
            name={gameData.name}
            description={gameData.description}
            image={gameData.image}
          />
          <Product
            name={gameData.name}
            description={gameData.description}
            image={gameData.image}
          />
          <Product
            name={gameData.name}
            description={gameData.description}
            image={gameData.image}
          />
          <Product
            name={gameData.name}
            description={gameData.description}
            image={gameData.image}
          />
          <Product
            name={gameData.name}
            description={gameData.description}
            image={gameData.image}
          />
        </div>
      </div>
    </div>
  );
}
