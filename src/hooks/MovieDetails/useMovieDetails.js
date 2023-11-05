import { useEffect } from "react";
import { addtoMovieDetails, clearMovieDetails } from "../../utils/movieSlice";
import { API_OPTION } from "../../utils/constants";
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
    // console.log(json);
    // dispatch(addtoMovieDetails(json));
    // console.log("Movie Details updated");
  };

  useEffect(() => {
    getMovieDetails(movieId);

    return () => dispatch(clearMovieDetails());
  }, [movieId]);
};

export default useMovieDetails;
