import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTPage from "./GPTPage";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  const GPTVisible = useSelector((store) => store?.GPT.showGPTPage);

  return (
    <>
      <div>
        <div className="">
          <Header />
        </div>
      </div>
      <div>
        {GPTVisible ? (
          <GPTPage />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
