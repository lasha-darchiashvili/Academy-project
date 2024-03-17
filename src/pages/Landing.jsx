import React from "react";
import Header from "../components/Header";
import LandingContent from "../components/LandingContent";
import Footer from "../components/Footer";
import Upcoming from "../components/Upcoming";
import Products from "../components/Products";
import SearchBar from "../components/SearchBar";

export default function Landing() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* <LandingContent />
      <Upcoming /> */}
      <SearchBar />
      <Products />
      <Footer />
    </div>
  );
}
