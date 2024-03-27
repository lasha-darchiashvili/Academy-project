import React from "react";

export default function ProfileContent() {
  const profileInfo = {
    name: "James",
    surname: "Rodrigues",
    email: "Rodrigues@gmail.com",
    phone: "0123456789",
    address: "123 Main St, San Francisco, CA 94107",
  };
  return (
    <div className="flex justify-center mt-[6rem]">
      <div className="w-5/6 bg-custom-second-blue flex gap-[10rem] px-[6rem] py-[6rem] rounded-xl text-gray-400">
        <div className="overflow-hidden">
          <img
            className="w-[20rem] rounded-xl"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            alt=""
          />
        </div>
        <form action="">
          <p className="font-semibold text-[1.6rem]">{profileInfo.name}</p>
          <p className="font-semibold text-[1.6rem]">{profileInfo.surname}</p>
          <p className="font-semibold text-[1.6rem]">{profileInfo.email}</p>
          <p className="font-semibold text-[1.6rem]">+ {profileInfo.phone}</p>
          <p className="font-semibold text-[1.6rem]">{profileInfo.address}</p>
          <div></div>
          <div className="flex gap-[2rem] mt-[2rem]">
            <div>
              <p className="text-[1.6rem] font-semibold">Password</p>
              <input
                className="mt-[1rem] text-[1.2em] rounded py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
                type="password"
              />
            </div>
            <div>
              <p className="text-[1.6rem] font-semibold">Confirm Password</p>
              <input
                className="mt-[1rem] text-[1.2em] rounded py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
                type="password"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" bg-gray-300 px-[2rem] py-[1rem] w-[15rem] rounded-xl mt-[4rem] text-[1.4rem] text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
