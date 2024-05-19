import React from "react";
import ContactUs from "./components/contactUs";
import ContactInfo from "./components/contactInfo";

const Contact: React.FC = () => {
  return (
    <div className="grow w-[1000px] mx-auto mt-[4rem]">
      <div className="flex justify-between">
        <ContactUs />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
