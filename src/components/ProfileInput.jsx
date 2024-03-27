import React from "react";

export default function ProfileInput({ inputValue }) {
  return (
    <input
      type="text"
      value={inputValue}
      className="mt-[1rem] text-[1.2em] rounded py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
    />
  );
}
