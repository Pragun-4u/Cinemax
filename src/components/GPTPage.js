import React from "react";
import GPTSearch from "./GPTSearch";
import GPTSearchRecommendation from "./GPTSearchRecommendation";
import { BG_IMG_CDN } from "../utils/constants";

const GPTPage = () => {
  return (
    <>
      <img
        className="w-screen h-screen bg-cover bg-no-repeat absolute"
        src={BG_IMG_CDN}
      ></img>
      <div className="relative z-10">
        <GPTSearch />
        <GPTSearchRecommendation />
      </div>
    </>
  );
};

export default GPTPage;
