import React from "react";
import { MOVIE_IMG_CDN } from "../utils/constants";

const VideoCard = ({ original_title, poster_path }) => {
  return (
    <div className="mx-1 w-48 transition py-1 ease-in-out delay-350 hover:scale-125  shadow-lg shadow-cyan-500/50">
      <img
        alt="Movie Card"
        className="w-auto rounded-lg "
        src={MOVIE_IMG_CDN + poster_path}
      ></img>
      {/* <h1 className="text-center text-lg">{original_title}</h1> */}
    </div>
  );
};

export default VideoCard;
