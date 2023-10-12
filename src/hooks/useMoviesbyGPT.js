import openai from "../components/OpenAi";

import { API_OPTION } from "../utils/constants";

const GetMovieInfo = async (movieName) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&page=1`,
    API_OPTION
  );
  const json = await data.json();
  return json?.results;
};

const useMoviesbyGPT = async (Search) => {
  //   const dispatch = useDispatch();
  const SearchQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    Search +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. STRICTLY FOLLOW THIS  Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: SearchQuery }],
    model: "gpt-3.5-turbo",
  });

  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  console.log(gptMovies);

  const PromiseArray = gptMovies.map((eachMovie) => GetMovieInfo(eachMovie));

  const TMDBMovies = await Promise.all(PromiseArray);
  console.log(TMDBMovies);

  return { TMDBMovies, gptMovies };
};

export default useMoviesbyGPT;
