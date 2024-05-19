import React from "react";

interface Props {
  statistics: string;
  statsDescription: string;
}

const GameStats: React.FC<Props> = ({ statistics, statsDescription }) => {
  return (
    <div>
      <p className="text-[3rem]">{statistics}</p>
      <p className="text-[1rem] text-custom-gray">{statsDescription}</p>
    </div>
  );
};

export default GameStats;
