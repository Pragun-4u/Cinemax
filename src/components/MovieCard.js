import React from "react";
import { MOVIE_IMG_CDN, POSTER_UNAVAILABLE } from "../utils/constants";

const MovieCard = ({ original_title, poster_path }) => {
  return (
    <div className="mx-2 h-full  w-32 md:w-48 transition py-1 ease-in-out delay-350 hover:scale-125 cursor-pointer  shadow-lg shadow-cyan-500/50">
      <img
        alt="Movie Card"
        className="w-full  md:w-auto rounded-lg "
        src={
          poster_path === null || poster_path === undefined
            ? POSTER_UNAVAILABLE
            : MOVIE_IMG_CDN + poster_path
        }
      ></img>
      <h1 className="text-center text-sm md:text-lg">{original_title}</h1>
    </div>
  );
};

export default MovieCard;
