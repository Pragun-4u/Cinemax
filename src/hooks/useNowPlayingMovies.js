import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addtoNowPlaying } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(addtoNowPlaying(json?.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
