import React from "react";

const VideoInfo = ({ title, overview, id }) => {
  return (
    <div className="py-[15%] aspect-video px-12 h-fit  absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl mb-2 font-bold">{title}</h1>
      <h1 className="w-1/3 text-lg font-sans py-6">{overview}</h1>
      <div className="flex ">
        <button className="bg-white hover:opacity-80 text-lg px-8 py-2 h-12 rounded-lg font-bold text-black  flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 mt-1 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
          Play
        </button>
        <button className="bg-gray-300 bg-opacity-50 mx-2 px-8 py-3 h-12 rounded-lg font-bold text-black  flex">
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
