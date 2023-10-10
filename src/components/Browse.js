import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <>
      <div className="w-full flex justify-between h-24 bg-black  ">
        <div>
          <Header />
        </div>
      </div>
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
