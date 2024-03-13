import React from "react";

export default function GameStats({ statistics, statsDescription }) {
  return (
    <div>
      <p className="text-[3rem]">{statistics}</p>
      <p className="text-[1rem] text-custom-gray">{statsDescription}</p>
    </div>
  );
}
