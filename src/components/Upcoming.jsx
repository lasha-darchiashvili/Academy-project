import React from "react";
import witcherExp from "../assets/witcher-expanstion.png";
import UpcomingGame from "./UpcomingGame";

// import hogwarts from "../assets/hogwarts.jpg";
// import itachi from "../assets/itachi.jpg";
// import messi from "../assets/messi.jpg";
// import spider from "../assets/spider.jpg";
// import witcher from "../assets/witcher.jpg";
// import witcherExpanstion from "../assets/witcher-expanstion.png";
// import itachiExpanstion from "../assets/itachi-expanstion.png";
import upcomingGamesData from "../blogsdata.js";

export default function Upcoming() {
  console.log(upcomingGamesData[0].createDate);
  return (
    <div className="flex items-center flex-col text-custom-white mt-[4rem] gap-[4rem]">
      <p className="text-custom-white text-[2.4rem]">Upcoming Games</p>
      <div className="w-[120rem] flex flex-col gap-[5rem] items-center">
        {upcomingGamesData.map((game) => (
          <UpcomingGame
            key={game.id}
            title={game.title}
            img={game.mainImage}
            text={game.description}
            createDate={game.createDate}
            readMoreImage={game.readMoreImage}
          />
        ))}
      </div>
    </div>
  );
}
