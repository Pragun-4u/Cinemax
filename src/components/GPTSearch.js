import React from "react";
import lang from "./LanguageConstants";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const LangKey = useSelector((store) => store.Lang?.appLanguage);
  return (
    <div className="py-[4%] w-screen my-[5%] border  absolute border-red-200 flex justify-center">
      <form className=" py-4 bg-black  flex justify-center w-3/5 ">
        <input
          type="text"
          className="p-2 font-bold rounded-xl opacity-100 py-4 w-3/5 text-center m-2"
          placeholder={lang[LangKey].GPTPlaceholder}
        ></input>
        <button className="p-2 px-4 m-2 py-4 text-white font-bold bg-red-500 rounded-lg">
          {lang[LangKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearch;
