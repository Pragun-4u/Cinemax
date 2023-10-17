import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtoMovieDetailsSimilar } from "../../utils/movieSlice";
import { API_OPTION } from "../../utils/constants";

const useMoviesSimilar = () => {
  const dispatch = useDispatch();
  const getMovieSimilar = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/similar",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json?.results);
    // dispatch(addtoMovieDetailsSimilar(json?.results));
    // console.log("Similar updated");
  };

  useEffect(() => {
    getMovieSimilar(movieId);
  }, [movieId]);
};

export default useMoviesSimilar;
