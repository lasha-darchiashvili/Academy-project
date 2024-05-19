"use client";
import React from "react";
import Mainlogo from "../../../public/assets/Mainlogo.svg";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import HeaderButton from "./headerButton";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Header() {
  const router = useRouter();
  const { t, i18n: translation } = useTranslation();
  console.log(i18n.language);

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

  if (!i18n.language) {
    i18n.changeLanguage("en");
  }

  const handleChangeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ge");
    } else {
      i18n.changeLanguage("en");
    }
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
          <img src={Mainlogo.src} alt="mainlogo" />

          <Link href="/">
            <p className="text-[2rem]">{t("navbarPokestar")}</p>
          </Link>
        </div>
        <div className="flex gap-[3em] text-[1.6rem] font-semibold">
          <Link href="#">{t("navbarGames")}</Link>
          <Link href="#">{t("navbarNews")}</Link>
          <Link href="/blogs">{t("navbarBlog")}</Link>
          <Link href="/profile">{t("navbarProfile")}</Link>
          <Link href="/contact">{t("navbarContact")}</Link>
        </div>
        <div className="flex gap-[1rem]">
          <button
            className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={handleChangeLanguage}
          >
            {t("languageAfterChange")}
          </button>
          <HeaderButton handleLogout={handleLogout} />
        </div>
      </div>
    </nav>
  );
}
