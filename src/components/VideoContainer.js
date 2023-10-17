import React from "react";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-10 w-screen overflow-x-hidden">
      <h1 className="text-2xl  md:text-3xl md:px-1 py-3">{title}</h1>
      <div className="flex  hover:overflow-x-scroll overflow-y-hidden">
        <div className="flex py-2 ">
          {movies === null ? (
            <Shimmer />
          ) : (
            movies?.map((eachMovie) => (
              <Link
                to={"/results?searchquery=" + eachMovie.id}
                key={eachMovie.id}
              >
                <MovieCard
                  original_title={eachMovie?.original_title}
                  poster_path={eachMovie?.poster_path}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
