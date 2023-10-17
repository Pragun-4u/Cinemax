import React, { useEffect } from "react";
import { API_OPTION } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addtoMovieDetails, clearMovieDetails } from "../../utils/movieSlice";

const useFullMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const arrayFetch = [
    fetch("https://api.themoviedb.org/3/movie/" + movieId, API_OPTION),
    fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/credits",
      API_OPTION
    ),
    fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/recommendations",
      API_OPTION
    ),
    fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/similar",
      API_OPTION
    ),
    fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTION
    ),
  ];

  const MovieDetailFetch = async () => {
    const data = await Promise.all(arrayFetch);
    const res = await Promise.all(
      data.map((item) => {
        return item.json();
      })
    );

    console.log(...res);
    dispatch(addtoMovieDetails(res));
  };

  useEffect(() => {
    MovieDetailFetch();

    return () => dispatch(clearMovieDetails());
  }, [movieId]);
};

export default useFullMovieDetails;
