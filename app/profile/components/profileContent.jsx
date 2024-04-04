"use client";
import React from "react";
import ProfileInput from "./profileInput";
import { useState } from "react";

export default function ProfileContent() {
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
            title="Name"
            onChange={handleInputChange}
            value={formData.name}
            name="name"
            type="text"
            placeholder="Enter User Name"
          />
          <ProfileInput
            title="Surname"
            onChange={handleInputChange}
            value={formData.surname}
            name="surname"
            type="text"
            placeholder="Enter User Surname"
          />
          <ProfileInput
            title="Email"
            onChange={handleInputChange}
            value={formData.email}
            name="email"
            type="email"
            placeholder="Enter User Email"
          />
          <ProfileInput
            title="Phone Number"
            onChange={handleInputChange}
            value={formData.number}
            name="number"
            type="number"
            placeholder="Enter User Phone Number"
          />

          <div className="flex gap-[2rem] mt-[2rem]">
            <ProfileInput
              title="New password"
              onChange={handleInputChange}
              value={formData.password}
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <ProfileInput
              title="Confirm password"
              onChange={handleInputChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="password"
            />
          </div>
          {passwordsNotMatch ? (
            <p className="text-red-500 text-[1.6rem]">
              Passwords does not match
            </p>
          ) : (
            ""
          )}

          <button
            type="submit"
            className=" bg-gray-300 px-[2rem] py-[1rem] w-[15rem] rounded-xl mt-[4rem] text-[1.4rem] text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
