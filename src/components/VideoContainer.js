import React from "react";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = ({ title, movies }) => {
  return (
    <div className="mx-10">
      <h1 className="text-3xl px-2 py-3">{title}</h1>
      <div className="flex  hover:overflow-x-scroll overflow-y-hidden">
        <div className="flex py-2">
          {movies === null ? (
            <Shimmer />
          ) : (
            movies?.map((eachMovie) => (
              <Link
                to={"/results?searchquery=" + eachMovie.id}
                key={eachMovie.id}
              >
                <VideoCard
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
