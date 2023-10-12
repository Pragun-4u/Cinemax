import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import Shimmer from "./Shimmer";

const GPTSearchRecommendation = () => {
  const gpt = useSelector((store) => store.GPT);
  const { movieResults, movieNames, LoadingState } = gpt;
  return (
    <div className="w-screen text-white bg-black opacity-90  absolute my-[25%]">
      {LoadingState === true ? (
        <>
          <div className="flex bg-black justify-around">
            <Shimmer />
          </div>
        </>
      ) : (
        movieNames?.map((eachMovie, index) => (
          <VideoContainer
            key={eachMovie}
            title={eachMovie}
            movies={movieResults[index]}
          />
        ))
      )}
    </div>
  );
};

export default GPTSearchRecommendation;
