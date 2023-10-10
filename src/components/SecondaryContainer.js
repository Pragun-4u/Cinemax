import React from "react";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black text-white">
      <div className="">
        <VideoContainer title={"Now Playing"} movies={movies?.NowPlaying} />
        <VideoContainer
          title={"Popular Movies"}
          movies={movies?.PopularMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
