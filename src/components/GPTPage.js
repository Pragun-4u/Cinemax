import React from "react";
import GPTSearch from "./GPTSearch";
import GPTSearchRecommendation from "./GPTSearchRecommendation";
import { ALT_BG_IMG_CDN } from "../utils/constants";

const GPTPage = () => {
  return (
    <>
      <img
        alt="Background Image"
        className="w-full  fixed h-screen object-cover bg-no-repeat "
        src={ALT_BG_IMG_CDN}
      ></img>
      <div className="">
        <GPTSearch />
        <GPTSearchRecommendation />
      </div>
    </>
  );
};

export default GPTPage;
