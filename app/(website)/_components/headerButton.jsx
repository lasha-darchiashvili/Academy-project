"use client";
import React from "react";

export default function headerButton({ handleLogout }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleLogout();
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none"
      >
        Log Out
      </button>
    </div>
  );
}
