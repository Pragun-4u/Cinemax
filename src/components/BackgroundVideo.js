import React, { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtotrailerVideo } from "../utils/movieSlice";
import Loader from "./Loader";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(id);
  return (
    <iframe
      className="w-full aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?autoplay=1&mute=1&showinfo=0&controls=0&autohide=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default BackgroundVideo;
