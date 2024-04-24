import React from "react";
import search from "../../../public/assets/search.svg";
import Image from "next/image";

export default function SearchBar({ handleClick, onChange }) {
  return (
    <div className="w-full flex justify-center mt-[2rem]">
      <div className="w-5/6 bg-custom-brown h-[5rem] rounded-xl flex items-center">
        <form className="flex justify-center w-full gap-[1rem]">
          <input
            className="block w-5/6 border border-gray-300 bg-white h-[3rem] px-[1.25rem] pr-[1rem] rounded-lg focus:outline-none focus:border-black"
            type="search"
            placeholder="search"
            onChange={onChange}
          />
          <button
            type="submit"
            className=" bg-slate-700 cursor-pointer w-[3rem] flex justify-center items-center rounded-xl"
            onClick={handleClick}
          >
            <Image src={search.src} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
