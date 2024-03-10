import React from "react";

export default function Footer() {
  return (
    <footer className="h-[20rem] bg-custom-blue mt-[5rem] text-custom-gray flex justify-center">
      <div className="w-5/6 mt-[2rem]">
        <div className="flex justify-between">
          <div className="flex gap-[5em]">
            <ul className="font-semibold text-[1.4rem]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="font-semibold text-[1.4rem]">
              <li>
                <a href="#">Pokestar connect</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
            <ul className="font-semibold text-[1.4rem]">
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
            <ul className="font-semibold text-[1.4rem]">
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mb-[1rem]">
              Subscribe to Our Newsletter
            </h3>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mr-2 py-2 px-3 bg-gray-700 text-white rounded-md focus:outline-none focus:bg-gray-600"
                />
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-between mt-[5rem]">
          <p>&copy; 2024 Pokestar. All rights reserved.</p>
          <div className="flex gap-[1rem]">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
