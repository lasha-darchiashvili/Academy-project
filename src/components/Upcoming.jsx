import React from "react";
import witcherExp from "../assets/witcher-expanstion.png";
import UpcomingGame from "./UpcomingGame";

import hogwarts from "../assets/hogwarts.jpg";
import itachi from "../assets/itachi.jpg";
import messi from "../assets/messi.jpg";
import spider from "../assets/spider.jpg";
import witcher from "../assets/witcher.jpg";
import witcherExpanstion from "../assets/witcher-expanstion.png";
import itachiExpanstion from "../assets/itachi-expanstion.png";

export default function Upcoming() {
  const upcomingGamesData = [
    {
      title: "Witcher 3",
      img: witcher,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, est dignissimos blanditiis possimus qui error illo perspiciatis, sit eos provident alias modi accusantium at nostrum! Repellendus eaque amet labore molestias.",
    },
    {
      title: "Hogwarts Legacy",
      img: hogwarts,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, est dignissimos blanditiis possimus qui error illo perspiciatis, sit eos provident alias modi accusantium at nostrum! Repellendus eaque amet labore molestias.",
    },
    {
      title: "Spider-man",
      img: spider,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, est dignissimos blanditiis possimus qui error illo perspiciatis, sit eos provident alias modi accusantium at nostrum! Repellendus eaque amet labore molestias.",
    },
    {
      title: "Messi",
      img: messi,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, est dignissimos blanditiis possimus qui error illo perspiciatis, sit eos provident alias modi accusantium at nostrum! Repellendus eaque amet labore molestias.",
    },
    {
      title: "Itachi",
      img: itachi,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, est dignissimos blanditiis possimus qui error illo perspiciatis, sit eos provident alias modi accusantium at nostrum! Repellendus eaque amet labore molestias.",
    },
  ];

  return (
    <div className="flex items-center flex-col text-custom-white mt-[8rem] gap-[4rem]">
      <p className="text-custom-white text-[2.4rem]">Upcoming Games</p>
      <div className="w-5/6 flex flex-col gap-[5rem] items-center">
        <UpcomingGame
          title={upcomingGamesData[0].title}
          img={upcomingGamesData[0].img}
          text={upcomingGamesData[0].text}
        >
          <div className="flex gap-[2rem] items-center">
            <div className="overflow-hidden">
              <img className="w-[4rem]" src={witcherExpanstion} alt="" />
            </div>
            <p className="text-[1.2rem]">Comes with expansion</p>
          </div>
        </UpcomingGame>
        <UpcomingGame
          title={upcomingGamesData[1].title}
          img={upcomingGamesData[1].img}
          text={upcomingGamesData[1].text}
        />
        <UpcomingGame
          title={upcomingGamesData[2].title}
          img={upcomingGamesData[2].img}
          text={upcomingGamesData[2].text}
        />
        <UpcomingGame
          title={upcomingGamesData[3].title}
          img={upcomingGamesData[3].img}
          text={upcomingGamesData[3].text}
        />
        <UpcomingGame
          title={upcomingGamesData[4].title}
          img={upcomingGamesData[4].img}
          text={upcomingGamesData[4].text}
        >
          <div className="flex gap-[2rem] items-center">
            <div className="overflow-hidden">
              <img className="w-[4rem]" src={itachiExpanstion} alt="" />
            </div>
            <p className="text-[1.2rem]">Comes with expansion</p>
          </div>
        </UpcomingGame>
      </div>
    </div>
  );
}
