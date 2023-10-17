import React from "react";
import { useNavigate } from "react-router-dom";

const VideoInfo = ({ title, overview, id }) => {
  const navigate = useNavigate();
  return (
    <div className="py-[18%] md:py-[15%] aspect-video  px-4 md:px-12 h-fit  absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-xl md:text-6xl  font-bold">{title}</h1>
      <div className="hidden md:block pr-10 md:pr-0">
        <h1 className="md:w-1/3 w-4/5 md:text-lg text-xs text-left font-sans md:py-6  ">
          {overview.length > 200 ? overview.slice(0, 200) + " ..." : overview}
        </h1>
      </div>
      <div className="flex mt-2 pb-2">
        <button className="text-sm h-6 px-2 bg-white hover:opacity-80 md:text-lg md:px-8 md:py-2 md:h-12 rounded-lg font-bold text-black  flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4   h-
            4 md:w-6 mt-1 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
          Play
        </button>
        <button
          onClick={() => navigate("/results?searchquery=" + id)}
          className="bg-gray-300 text-sm md:text-lg h-6 px-2 bg-opacity-50 mx-2 md:px-8 md:py-2 md:h-12 rounded-lg mb:font-bold text-black  flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
