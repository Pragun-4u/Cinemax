import React from "react";
import GPTSearch from "./GPTSearch";
import GPTSearchRecommendation from "./GPTSearchRecommendation";
import { ALT_BG_IMG_CDN } from "../utils/constants";

const GPTPage = () => {
  return (
    <>
      <img
        className="w-full absolute h-screen bg-cover bg-no-repeat "
        src={ALT_BG_IMG_CDN}
      ></img>
      <div className="relative  z-10">
        <GPTSearch />
        <GPTSearchRecommendation />
      </div>
    </>
  );
};

export default GPTPage;
