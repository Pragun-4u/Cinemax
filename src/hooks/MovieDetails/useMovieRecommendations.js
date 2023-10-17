import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtoMovieDetailsRecommendations } from "../../utils/movieSlice";
import { API_OPTION } from "../../utils/constants";

const useMovieRecommendations = (movieId) => {
  const dispatch = useDispatch();
  const getMovieRecommendations = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/recommendations",
      API_OPTION
    );
    const json = await data.json();
    console.log(json?.results);
    // dispatch(addtoMovieDetailsRecommendations(json?.results));
    console.log("recommendation updated");
  };
  useEffect(() => {
    getMovieRecommendations(movieId);
  });
};

export default useMovieRecommendations;
