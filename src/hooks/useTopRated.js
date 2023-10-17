import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtoTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const top_rated = useSelector((store) => store.movie.TopRated);
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addtoTopRated(json?.results));
  };
  useEffect(() => {
    !top_rated && getTopRated();
  }, []);
};

export default useTopRated;
