import React from "react";

const Shimmer = () => {
  return Array(8)
    .fill(" ")
    .map((index) => (
      <div
        key={Math.random()}
        className="animate-pulse w-28 h-36 md:w-48 md:h-72 m-2 bg-slate-100"
      ></div>
    ));
};

export default Shimmer;
