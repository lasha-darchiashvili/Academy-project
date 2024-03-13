import React from "react";

export default function UpcomingGame({ title, img, text, children }) {
  return (
    <div className="flex flex-col gap-[2rem] items-center">
      <div className="flex flex-row gap-[2rem]">
        <div className="w-3/5">
          <img className="w-full" src={img} alt="witcher_photo" />
        </div>
        <div className="w-2/5 flex flex-col gap-[2rem]">
          <p className="text-[1.8rem]">{title}</p>
          <p className="text-[1.4rem]">{text}</p>
          <p className="text-[1.4rem]">{text}</p>
          <p className="text-[1.4rem]">{text}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
