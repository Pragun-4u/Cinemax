import React, { useRef } from "react";
import lang from "./LanguageConstants";
import { useDispatch, useSelector } from "react-redux";

import useMoviesbyGPT from "../hooks/useMoviesbyGPT";
import { LoadingState, addMoviesNameandResult } from "../utils/GPTSlice";
const GPTSearch = () => {
  const dispatch = useDispatch();
  const LangKey = useSelector((store) => store.Lang?.appLanguage);
  const searchText = useRef(null);

  const HandleSearchText = async () => {
    dispatch(LoadingState());
    console.log(searchText.current.value);
    const { TMDBMovies, gptMovies } = await useMoviesbyGPT(
      searchText.current.value
    );

    dispatch(LoadingState());
    dispatch(
      addMoviesNameandResult({
        movieNames: gptMovies,
        movieResults: TMDBMovies,
      })
    );
    console.log(TMDBMovies, gptMovies);
  };

  return (
    <div className="py-[4%] w-screen my-[5%]   absolute flex justify-center">
      <form
        className=" py-4  flex justify-center w-3/5 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 hover:bg-orange-200 font-bold rounded-xl opacity-100 py-4 w-3/5 text-center m-2"
          placeholder={lang[LangKey].GPTPlaceholder}
        ></input>
        <button
          onClick={HandleSearchText}
          className="p-2 px-4 m-2 py-4 text-white font-bold bg-red-500 rounded-lg"
        >
          {lang[LangKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearch;
