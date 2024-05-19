"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className=" bg-custom-blue mt-[3rem] text-custom-gray flex justify-center">
      <div className="w-5/6 mt-[2rem]">
        <div className="flex justify-between">
          <div className="flex gap-[5em]">
            <ul className="font-semibold text-[1rem]">
              <li>
                <a href="#">{t("footerGames")}</a>
              </li>
              <li>
                <a href="#">{t("footerNews")}</a>
              </li>
              <li>
                <a href="#">{t("footerVideos")}</a>
              </li>
              <li>
                <a href="#">{t("footerStore")}</a>
              </li>
              <li>
                <a href="#">{t("footerSupport")}</a>
              </li>
            </ul>
            <ul className="font-semibold text-[1rem]">
              <li>
                <a href="#">{t("footerPokestarConnect")}</a>
              </li>
              <li>
                <a href="#">{t("footerHelp")}</a>
              </li>
            </ul>
            <ul className="font-semibold text-[1rem]">
              <li>
                <a href="#">{t("footerInvestors")}</a>
              </li>
              <li>
                <a href="#">{t("footerPress")}</a>
              </li>
            </ul>
            <ul className="font-semibold text-[1rem]">
              <li>
                <a href="#">{t("footerCompany")}</a>
              </li>
              <li>
                <a href="#">{t("footerCareers")}</a>
              </li>
              <li>
                <a href="#">{t("footerLocations")}</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-[1rem] font-bold mb-[1rem]">
              {t("footerSubscribeToOurNewsletter")}
            </h3>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder={t("footerYourEmail")}
                  className="mr-2 py-2 px-3 bg-gray-700 text-white rounded-md focus:outline-none focus:bg-gray-600"
                />
                <button
                  type="submit"
                  className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none"
                >
                  {t("footerSubscribe")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-between mt-[3rem] mb-[1rem]">
          <p>&copy; {t("footerCopyRight")}</p>
          <div className="flex gap-[1rem]">
            <a href="#">{t("footerPrivacyPolicy")}</a>
            <a href="#">{t("footerTermsAndConditions")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
