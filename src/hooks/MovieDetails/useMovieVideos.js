import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../../utils/constants";
import { addtoMovieDetailsID } from "../../utils/movieSlice";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json?.results);
    // dispatch(addtoMovieDetailsID(json?.results));
    // console.log("Videos updated");
  };
  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
};

export default useMovieVideos;
