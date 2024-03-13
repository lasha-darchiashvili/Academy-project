import React from "react";
import Header from "../components/Header";
import LandingContent from "../components/LandingContent";
import Footer from "../components/Footer";
import Upcoming from "../components/Upcoming";

export default function Landing() {
  return (
    <div>
      <Header />
      <LandingContent />
      <Upcoming />
      <Footer />
    </div>
  );
}
