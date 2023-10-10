import React, { useEffect } from "react";
import VideoInfo from "./VideoInfo";
import BackgroundVideo from "./BackgroundVideo";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.NowPlaying);
  // const movies = null;
  if (movies === null) {
    return <Loader />;
  }
  //
  const MainMovie = movies[Math.floor(Math.random() * 20)];
  const { original_title, overview, id } = MainMovie;

  return (
    <div className="">
      <VideoInfo title={original_title} overview={overview} />
      <BackgroundVideo id={id} />
    </div>
  );
};

export default MainContainer;