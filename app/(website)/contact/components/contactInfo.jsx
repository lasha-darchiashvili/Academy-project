import React from "react";
import facebook from "../../../../public/assets/facebook.svg";
import linkedin from "../../../../public/assets/linkedin.svg";
import home from "../../../../public/assets/home.svg";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="mt-[3rem]">
      <div className="grid grid-cols-2 gap-y-[6rem] gap-x-[4rem]">
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-max-[18rem]">
          <div className="mb-[1rem]">
            <img className="w-[3rem]" src={home.src} alt="home" />
          </div>
          <p className="text-white font-bold text-[1.2rem]">
            {" "}
            <Link href="https://www.google.com">
              {t("contactInfoEastEndOffice")}
            </Link>{" "}
          </p>
          <p className="text-white">{t("contactInfoEastEndAddress")}</p>
          <p className="text-white">{t("contactInfoEastEndHours")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-max-[18rem]">
          <div className="mb-[1rem]">
            <img className="w-[3rem]" src={home.src} alt="home" />
          </div>
          <p className="text-white font-bold text-[1.2rem]">
            {" "}
            <Link href="https://www.google.com">
              {t("contactInfoWestEndOffice")}
            </Link>{" "}
          </p>
          <p className="text-white">{t("contactInfoWestEndAddress")}</p>
          <p className="text-white">{t("contactInfoWestEndHours")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-max-[18rem]">
          <div className="mb-[1rem]">
            <img className="w-[3rem]" src={facebook.src} alt="facebook" />
          </div>
          <p className="text-white font-bold text-[1.2rem]">
            {" "}
            <Link href="https://www.facebook.com">
              {t("contactInfoFacebook")}
            </Link>{" "}
          </p>
          <p className="text-white">-</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-max-[18rem]">
          <div className="mb-[1rem]">
            <img className="w-[3rem]" src={linkedin.src} alt="linkedin" />
          </div>
          <p className="text-white font-bold text-[1.2rem]">
            {" "}
            <Link href="https://www.instagram.com">
              {t("contactInfoInstagram")}
            </Link>{" "}
          </p>
          <p className="text-white">-</p>
        </div>
      </div>
    </div>
  );
}
