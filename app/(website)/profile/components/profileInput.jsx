import React from "react";

export default function ProfileInput({
  onChange,
  value,
  name,
  type,
  placeholder,
  title,
}) {
  return (
    <div className="flex flex-col gap-[1rem]">
      <label className="block text-gray-400 text-[1.6rem] font-semibold">
        {title}
      </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-[30rem] text-[1.2em] rounded py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
      />
      <hr className="border-gray-400" />
    </div>
  );
}
