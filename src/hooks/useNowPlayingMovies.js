import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtoNowPlaying } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const now_playing = useSelector((store) => store.movie.NowPlaying);
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addtoNowPlaying(json?.results));
  };
  useEffect(() => {
    !now_playing && getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
