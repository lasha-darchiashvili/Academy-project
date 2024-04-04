"use client";
import React from "react";

export default function ContactUs() {
  return (
    <div className="w-[40rem]">
      <div className="flex flex-col">
        <p className="font-semibold text-[1.8em] text-white ">Contact</p>
        <div className=" w-[75%] h-[0.5em] mx-0 "></div>
      </div>
      <p className="mb-4 font-semibold text-[1.2em] text-custom-gray">
        Want to work together? Let us know!
      </p>
      <form
        className=""
        action="https://formsubmit.co/feebae8e76caca0451f636709b37db9a"
        method="POST"
      >
        <div className="mb-4">
          <input
            className="text-[1.2em] shadow appearance-none  rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-custom-brown"
            id="username"
            type="text"
            placeholder="Username"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className=" text-[1.2em]  shadow appearance-none  rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-custom-brown"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className=" text-[1.2em]  shadow appearance-none  rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-custom-brown"
            id="message"
            rows="6"
            name="textarea"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mt-[2em]">
          <button
            onSubmit={(e) => e.preventDefault()}
            className="border border-solid rounded-md text-white text-[2.4em] hover:bg-gray-700 hover:text-custom-gray transition-all duration-500 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
