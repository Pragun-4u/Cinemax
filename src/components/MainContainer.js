import React, { useEffect, useState } from "react";
import VideoInfo from "./VideoInfo";
import BackgroundVideo from "./BackgroundVideo";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.NowPlaying);
  // const [showElement, setShowElement] = useState(true);
  // const movies = null;
  // useEffect(() => {
  //   const timer = setTimeout(function () {
  //     setShowElement(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);
  if (movies === null) {
    return <Loader />;
  }
  //
  const MainMovie = movies[Math.floor(Math.random() * 20)];
  const { original_title, overview, id } = MainMovie;

  return (
    <div className="">
      {/* {showElement && <VideoInfo title={original_title} overview={overview} />} */}
      {<VideoInfo title={original_title} id={id} overview={overview} />}
      <BackgroundVideo id={id} />
    </div>
  );
};

export default MainContainer;
