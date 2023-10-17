import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(id);
  return (
    <iframe
      className="w-full h-auto md:h-auto aspect-video"
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
