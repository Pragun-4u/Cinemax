import React, { useEffect } from "react";
import { addtoMovieDetailsCredit } from "../../utils/movieSlice";
import { API_OPTION } from "../../utils/constants";
import { useDispatch } from "react-redux";

const useMovieCredits = (movieId) => {
  const dispatch = useDispatch();
  const getMovieCredits = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/credits",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json?.cast);
    // dispatch(addtoMovieDetailsCredit(json?.cast));
    // console.log("Cast updated");
  };
  useEffect(() => {
    getMovieCredits(movieId);
  }, [movieId]);
};

export default useMovieCredits;
