"use client";
import React from "react";
import Mainlogo from "../../../public/assets/Mainlogo.svg";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import HeaderButton from "./headerButton";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    fetch("/api/logout", {
      method: "POST",
    })
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.error("Failed to log out:", error);
      });
  };

  // const handleClick = async () => {
  //   "use server";

  //   const response = await fetch("http://localhost:3000/api/logout", {
  //     method: "POST",
  //   });

  //   if (cookie) {
  //     cookies().delete("token");
  //     redirect("/login");
  //   }
  // };
  return (
    <nav className="flex justify-center h-[10rem] bg-custom-black">
      <div className="flex justify-between items-center w-5/6 text-custom-white font-semibold">
        <div className="flex justify-center items-center gap-[2rem]">
          <Image src={Mainlogo.src} alt="mainlogo" />

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
        <HeaderButton handleLogout={handleLogout} />
      </div>
    </nav>
  );
}
