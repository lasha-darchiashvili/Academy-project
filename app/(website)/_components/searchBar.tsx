"use client";
import React from "react";
import search from "../../../public/assets/search.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  handleClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleClick, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center mt-[2rem]">
      <div className="w-5/6 bg-custom-brown h-[5rem] rounded-xl flex items-center">
        <form className="flex justify-center w-full gap-[1rem]">
          <input
            className="block w-5/6 border border-gray-300 bg-white h-[3rem] px-[1.25rem] pr-[1rem] rounded-lg focus:outline-none focus:border-black"
            type="search"
            placeholder={t("Search")}
            onChange={onChange}
          />
          <button
            type="submit"
            className=" bg-slate-700 cursor-pointer w-[3rem] flex justify-center items-center rounded-xl"
            onClick={handleClick}
          >
            <img src={search.src} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
