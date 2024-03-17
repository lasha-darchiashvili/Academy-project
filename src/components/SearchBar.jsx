import React from "react";
import search from "../assets/search.svg";

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center mt-[2rem]">
      <div className="w-5/6 bg-custom-brown h-[5rem] rounded-xl flex items-center">
        <form className="flex justify-center w-full gap-[1rem]">
          <input
            className="block w-5/6 border border-gray-300 bg-white h-[3rem] px-[1.25rem] pr-[1rem] rounded-lg focus:outline-none focus:border-black"
            type="search"
            placeholder="search"
          />
          <button
            type="submit"
            className=" bg-slate-700 cursor-pointer w-[3rem] flex justify-center items-center rounded-xl"
          >
            <img src={search} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
