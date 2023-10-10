import React from "react";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-3xl py-3">{title}</h1>
      <div className="flex  hover:overflow-x-scroll overflow-y-hidden">
        <div className="flex py-2">
          {movies === null ? (
            <Shimmer />
          ) : (
            movies?.map((eachMovie) => (
              <VideoCard
                key={eachMovie.id}
                original_title={eachMovie?.original_title}
                poster_path={eachMovie?.poster_path}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
