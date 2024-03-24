import React from "react";
import ContactUs from "../components/ContactUs";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <div className="grow w-[1000px] mx-auto mt-[4rem]">
      <div className="flex justify-between">
        <ContactUs />

        <ContactInfo />
      </div>
    </div>
  );
}
