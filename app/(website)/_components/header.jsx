"use server";
import React from "react";
import Mainlogo from "../../../public/assets/Mainlogo.svg";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HeaderButton from "./headerButton";

export default async function Header() {
  const cookieStore = cookies();

  const cookie = cookieStore.get("token");

  const handleClick = () => {
    "use server";

    if (cookie) {
      cookies().delete("token");
      redirect("/login");
    }
  };
  return (
    <nav className="flex justify-center h-[10rem] bg-custom-black">
      <div className="flex justify-between items-center w-5/6 text-custom-white font-semibold">
        <div className="flex justify-center items-center gap-[2rem]">
          <img src={Mainlogo.src} alt="mainlogo" />

          <Link href="/">
            <p className="text-[2rem]">Pokestar</p>
          </Link>
        </div>
        <div className="flex gap-[3em] text-[1.6rem] font-semibold">
          <Link href="#">Games</Link>
          <Link href="#">News</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <HeaderButton handleClick={handleClick} />
      </div>
    </nav>
  );
}
