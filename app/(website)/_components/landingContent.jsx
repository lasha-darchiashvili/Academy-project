import React from "react";
import mainImg from "../../../public/assets/main-gta-picture.PNG";
import GameStats from "./GameStats";
import Image from "next/image";

export default function LandingContent() {
  return (
    <main className="flex items-center flex-col text-custom-white mt-[2rem]">
      <div className="w-5/6 bg-custom-black p-[2rem] rounded-3xl h-[30rem]">
        <p className="text-[8rem] font-bold">Pokestar Games Studio</p>
        <p className="text-[1.7rem] w-3/5 text-custom-gray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At labore
          voluptates inventore modi obcaecati est soluta dolorum hic saepe
          sequi. Molestias obcaecati harum reprehenderit architecto voluptate
          quisquam. Molestiae, voluptas recusandae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quaerat velit quo accusantium error
          aspernatur, fuga asperiores tenetur nihil v oluptates, sit do
        </p>
      </div>
      <div className="w-5/6 mt-[2rem] flex gap-[3rem]">
        <div className="overflow-hidden w-1/2">
          <Image className="rounded-3xl" src={mainImg.src} alt="" />
        </div>
        <div className=" bg-custom-black w-1/2 rounded-3xl p-[4rem] flex flex-col gap-[2.7rem]">
          <p className="text-[3.5rem]">Grand Theft Auto VI</p>
          <p className="text-[1.4rem]">
            GTA 6 may feature multiple locations, including a modern-day version
            of Vice City and a new fictional South American city. The game is
            expected to offer a richly detailed world for players to explore and
            interact with.
          </p>
          <p className="text-[1.4rem]">
            With the power of next-generation gaming consoles and advancements
            in technology, GTA 6 promises to deliver stunning visuals, realistic
            physics, and seamless gameplay experiences.
          </p>
          <div className="flex flex-col gap-[1.8rem]">
            <GameStats
              statistics="345 million"
              statsDescription="GTA Series Total Copies Sold"
            />
            <GameStats
              statistics="$8.5 billion"
              statsDescription="GTA V Total Revenue"
            />
            <GameStats
              statistics="$800 million"
              statsDescription="GTA V Launch day Revenue"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
