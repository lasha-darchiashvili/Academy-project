import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div
      className={`flex flex-col ${
        location.pathname === "landing" ? "h-screen" : "min-h-screen"
      }`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
