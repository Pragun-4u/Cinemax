import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill(" ")
    .map((index) => (
      <div
        key={Math.random()}
        className="animate-pulse w-48 h-72 mx-2 bg-slate-100"
      ></div>
    ));
};

export default Shimmer;
