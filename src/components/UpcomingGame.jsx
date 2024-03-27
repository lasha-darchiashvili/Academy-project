import React from "react";

export default function UpcomingGame({
  title,
  img,
  text,
  createDate,
  readMoreImage,
}) {
  const options = { year: "numeric", month: "long", day: "2-digit" };

  const formattedDate = createDate.toLocaleDateString("en-US", options);

  return (
    <div className="flex flex-col gap-[2rem] items-center w-full">
      <div className="flex flex-row gap-[2rem]">
        <div className="w-3/5">
          <img className="w-full" src={img} alt="witcher_photo" />
        </div>
        <div className="w-2/5 flex flex-col gap-[2rem]">
          <p className="text-[1.8rem]">{title}</p>
          <p className="text-[1.4rem]">{text}</p>
          <p className="text-[1.4rem]">{text}</p>
          <p className="text-[1.4rem]">{text}</p>
          <div className="flex mt-auto">
            <p className="ml-auto">
              {" "}
              <i>{formattedDate}</i>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[2rem] items-center">
        <div className="overflow-hidden">
          <img className="w-[4rem]" src={readMoreImage} alt="" />
        </div>
        <p className="text-[1.4rem] font-semibold">
          <a href="#">Read more</a>
        </p>
      </div>
    </div>
  );
}
