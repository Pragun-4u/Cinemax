import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import Shimmer from "./Shimmer";

const GPTSearchRecommendation = () => {
  const gpt = useSelector((store) => store.GPT);
  const { movieResults, movieNames, LoadingState } = gpt;
  return (
    <div className="md:w-screen text-white  bg-black opacity-90  relative md:absolute top-96 md:top-0  md:my-[25%]">
      {LoadingState === true ? (
        <>
          <div className="flex flex-wrap w-screen md:w-screen  md:flex md:flex-wrap  bg-black justify-around">
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
