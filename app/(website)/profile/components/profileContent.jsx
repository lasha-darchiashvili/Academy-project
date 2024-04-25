"use client";
import React from "react";
import ProfileInput from "./profileInput";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ProfileContent() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "James",
    surname: "Rodrigues",
    email: "Rodrigues@gmail.com",
    number: "0123456789",
    password: "",
    confirmPassword: "",
  });

  const [passwordsNotMatch, setPasswordsNotMatch] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordsNotMatch(true);
    } else {
      setPasswordsNotMatch(false);
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: "",
        confirmPassword: "",
      }));
      console.log(formData);
    }
  };

  console.log(formData.name);

  return (
    <div onSubmit={handleSubmit} className="flex justify-center mt-[6rem]">
      <div className="w-[120rem] bg-custom-second-blue flex gap-[10rem] px-[6rem] py-[6rem] rounded-xl text-gray-400">
        <div className="overflow-hidden w-[20rem] ">
          <img
            className="w-[20rem] rounded-xl"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            alt=""
          />
        </div>
        <form action="" className="flex flex-col gap-[1.5rem] grow">
          <ProfileInput
            title={t("profileContentNameTitle")}
            onChange={handleInputChange}
            value={formData.name}
            name="name"
            type="text"
            placeholder={t("profileContentNamePlaceholder")}
          />
          <ProfileInput
            title={t("profileContentSurnameTitle")}
            onChange={handleInputChange}
            value={formData.surname}
            name="surname"
            type="text"
            placeholder={t("profileContentSurnamePlaceholder")}
          />
          <ProfileInput
            title={t("profileContentEmailTitle")}
            onChange={handleInputChange}
            value={formData.email}
            name="email"
            type="email"
            placeholder={t("profileContentEmailPlaceholder")}
          />
          <ProfileInput
            title={t("profileContentPhoneNumberTitle")}
            onChange={handleInputChange}
            value={formData.number}
            name="number"
            type="number"
            placeholder={t("profileContentPhoneNumberPlaceholder")}
          />

          <div className="flex gap-[2rem] mt-[2rem]">
            <ProfileInput
              title={t("profileContentNewPasswordTitle")}
              onChange={handleInputChange}
              value={formData.password}
              name="password"
              type="password"
              placeholder={t("profileContentNewPasswordPlaceholder")}
            />
            <ProfileInput
              title={t("profileContentConfirmPasswordTitle")}
              onChange={handleInputChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder={t("profileContentConfirmPasswordPlaceholder")}
            />
          </div>
          {passwordsNotMatch ? (
            <p className="text-red-500 text-[1.6rem]">
              {t("profileContentPasswordsMismatch")}
            </p>
          ) : (
            ""
          )}

          <button
            type="submit"
            className=" bg-gray-300 px-[2rem] py-[1rem] w-[15rem] rounded-xl mt-[4rem] text-[1.4rem] text-black"
          >
            {t("profileContentSubmitButton")}
          </button>
        </form>
      </div>
    </div>
  );
}
