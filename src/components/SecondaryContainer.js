import React from "react";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black text-white">
      <div className="-my-52 relative bg-transparent z-20">
        <VideoContainer title={"Now Playing"} movies={movies?.NowPlaying} />
        <VideoContainer
          title={"Popular Movies"}
          movies={movies?.PopularMovies}
        />
        <VideoContainer title={"Top Rated"} movies={movies?.TopRated} />
        <VideoContainer
          title={"Upcoming Movies"}
          movies={movies?.UpcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
