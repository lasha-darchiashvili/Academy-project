import React from "react";
import facebook from "../../../public/assets/facebook.svg";
import linkedin from "../../../public/assets/linkedin.svg";
import home from "../../../public/assets/home.svg";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="mt-[3rem]">
      <div className="grid grid-cols-2 gap-y-[6rem] gap-x-[4rem]">
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-max-[18rem]">
          <div className="mb-[1rem]">
            <img className="w-[3rem]" src={home.src} alt="home" />
          </div>
          <p className="text-white font-bold text-[1.2rem]">
            {" "}
            <Link href="https://www.google.com">East end Office</Link>{" "}
          </p>
          <p className="text-white">Saint James Street 118 Avenue</p>
          <p className="text-white">Monday-Saturdey: 10am-7pm</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-max-[18rem]">
          <div className="mb-[1rem]">
            <img className="w-[3rem]" src={home.src} alt="home" />
          </div>
          <p className="text-white font-bold text-[1.2rem]">
            {" "}
            <Link href="https://www.google.com">West end Office</Link>{" "}
          </p>
          <p className="text-white">King George Street 11 Avenue</p>
          <p className="text-white">Monday-Saturdey: 10am-7pm</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-max-[18rem]">
          <div className="mb-[1rem]">
            <img className="w-[3rem]" src={facebook.src} alt="facebook" />
          </div>
          <p className="text-white font-bold text-[1.2rem]">
            {" "}
            <Link href="https://www.facebook.com">Facebook</Link>{" "}
          </p>
          <p className="text-white">-</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-max-[18rem]">
          <div className="mb-[1rem]">
            <img className="w-[3rem]" src={linkedin.src} alt="linkedin" />
          </div>
          <p className="text-white font-bold text-[1.2rem]">
            {" "}
            <Link href="https://www.instagram.com">Instagram</Link>{" "}
          </p>
          <p className="text-white">-</p>
        </div>
      </div>
    </div>
  );
}
