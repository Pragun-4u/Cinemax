import { useEffect } from "react";
import {
  addtoMovieDetails,
  addtoMovieDetailsCredit,
  addtoMovieDetailsID,
  addtoMovieDetailsRecommendations,
  addtoMovieDetailsSimilar,
} from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieDetails = (movieId) => {
  // const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const getMovieDetails = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTION
    );

    const json = await data.json();

    dispatch(addtoMovieDetails(json));
    // console.log("Movie Details updated");
  };
  const getMovieVideos = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addtoMovieDetailsID(json?.results));
    // console.log("Videos updated");
  };

  const getMovieCredits = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/credits",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addtoMovieDetailsCredit(json?.cast));
    // console.log("Cast updated");
  };
  const getMovieRecommendations = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/recommendations",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addtoMovieDetailsRecommendations(json?.results));
    // console.log("recommendation updated");
  };
  const getMovieSimilar = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/similar",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addtoMovieDetailsSimilar(json?.results));
    // console.log("Similar updated");
  };

  useEffect(() => {
    getMovieDetails(movieId);
    getMovieVideos(movieId);
    getMovieCredits(movieId);
    getMovieRecommendations(movieId);
    getMovieSimilar(movieId);
    // console.log("api called");
  }, [movieId]);
};

export default useMovieDetails;
