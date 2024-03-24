import React from "react";
import Mainlogo from "../assets/Mainlogo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-center h-[10rem] bg-custom-black">
      <div className="flex justify-between items-center w-5/6 text-custom-white font-semibold">
        <div className="flex justify-center items-center gap-[2rem]">
          <img src={Mainlogo} alt="mainlogo" />

          <Link to="/">
            <p className="text-[2rem]">Pokestar</p>
          </Link>
        </div>
        <div className="flex gap-[3em] text-[1.6rem] font-semibold">
          <Link to="#">Games</Link>
          <Link to="#">News</Link>
          <Link to="#">Videos</Link>
          <Link to="#">Store</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
