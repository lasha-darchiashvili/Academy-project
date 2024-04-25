"use server";
import React from "react";
import Link from "next/link";
import "../globals.css";
import { login } from "./authService";
import { cookies } from "next/headers";
import LoginFrom from "./components/loginFrom";
import { redirect } from "next/navigation";

export default async function page() {
  return (
    <div className="rounded z-10 sm:w-[400px] sm:h-[550px] absolute top-0 right-0 left-0 bottom-0 sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] bg-black/75 text-white ">
      <LoginFrom />
      <div className="px-[6rem] text-[1.6rem] mt-[6rem] sm:mt-0">
        <p>Testing credintials </p>
        <p>
          {" "}
          <span className="text-[1.4rem] text-graytx mt-[2rem]">
            username:
          </span>{" "}
          atuny0
        </p>
        <p>
          {" "}
          <span className="text-[1.4rem] text-graytx mt-[2rem]">
            password:
          </span>{" "}
          9uQFF1Lh
        </p>
      </div>
    </div>
  );
}
