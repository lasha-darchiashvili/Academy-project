"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function page({ id }) {
  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBlogData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  console.log(blogData);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-[3rem] text-red-500">Loading...</div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-[2rem] items-center w-full mt-[3rem]">
        <div className="flex flex-row gap-[2rem] bg-custom-second-blue w-[120rem] rounded-2xl">
          <div className="w-3/5">
            <img
              className="w-full"
              src="https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f"
              alt="photo"
            />
          </div>
          <div className="w-2/5 flex flex-col gap-[2rem] mt-[3rem] text-white">
            <p className="text-[2rem] mt-[2rem] mb-[2rem]">{blogData?.title}</p>
            <p>{blogData?.body}</p>
            <div>
              <p className="text-[1.8rem] text-gray-400 mb-[1rem]">tags</p>
              <div className="flex gap-[1rem] text-[1.4rem]">
                {blogData.tags.map((item) => {
                  return (
                    <p className="text-[1.4rem] text-gray-400 bg-zinc-900 px-4 py-2 rounded-lg">
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-[1.4rem] text-gray-400">
                reactions: {blogData?.reactions}
              </p>
            </div>

            <div className="mt-auto">
              <a
                className="bg-gray-500 block w-[10rem] ml-auto text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none mb-[1rem] mr-[1rem]"
                href="/blogs"
              >
                Go Back
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
