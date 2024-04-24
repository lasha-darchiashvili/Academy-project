"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import "../../globals.css";
import { useRouter } from "next/navigation";

export default function loginFrom() {
  const [password, setPassword] = useState({});
  const [username, setUsername] = useState(true);
  const [error, setError] = useState();

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(() => {
        router.push("/landing");
      })
      .catch((error) => {
        console.error("Failed to log in:", error);
      });
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   handleSignIn(username, password);
  // };

  return (
    <form
      action=""
      className="w-full flex flex-col sm:p-[6rem] px-[6rem] pt-[14rem]"
      onSubmit={handleLogin}
    >
      <h1 className="text-[3rem] mb-[1rem] font-semibold">Sign In</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="p-[1rem] text-gray-950 my-[1rem] bg-blackbg text-[1.6rem] rounded w-full"
          name="username"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-[1rem] text-gray-950 my-[1rem] bg-blackbg text-[1.6rem] rounded w-full"
          name="password"
        />
        <p className="text-red-600 text-[1.4rem">{error}</p>
      </div>

      <button
        className="p-[1rem] my-[2rem] bg-red text-[1.6rem] font-semibold rounded"
        type="submit"
      >
        Sign In
      </button>
      <p className="text-[1.6rem] text-graytx mt-[2rem]">
        New to Our Website?{" "}
        <Link className="text-white" href="#">
          Sign up now.
        </Link>
      </p>
    </form>
  );
}
