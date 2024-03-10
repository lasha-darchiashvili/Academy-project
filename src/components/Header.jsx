import React from "react";
import Mainlogo from "../assets/Mainlogo.svg";

export default function Header() {
  return (
    <nav className="flex justify-center h-[10rem] bg-custom-black">
      <div className="flex justify-between items-center w-5/6 text-custom-white font-semibold">
        <div className="flex justify-center items-center gap-[2rem]">
          <img src={Mainlogo} alt="mainlogo" />
          <p className="text-[2rem]">Pokestar</p>
        </div>
        <div className="flex gap-[3em] text-[1.6rem] font-semibold">
          <a href="#">Games</a>
          <a href="#">News</a>
          <a href="#">Videos</a>
          <a href="#">Store</a>
          <a href="#">Support</a>
        </div>
      </div>
    </nav>
  );
}
