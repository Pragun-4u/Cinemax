import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";
import { ALT_BG_IMG_CDN, BG_IMG_CDN, MOVIE_IMG_CDN } from "../utils/constants";
import convertNumber from "../helper/convertNumber";

const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const MovieDetails = useSelector((store) => store.movie?.MovieDetails);
  useMovieDetails(searchParams.get("searchquery"));
  // console.log(MovieDetails);
  if (MovieDetails === null) return;
  const {
    backdrop_path,
    original_title,
    overview,
    poster_path,
    production_companies,
    release_date,
    spoken_languages,
    tagline,
    vote_average,
    vote_count,
    revenue,
    budget,
    genres,
  } = MovieDetails;

  return (
    <div className="w-screen">
      <div className="absolute text-white   justify-center flex py-7 bg-black bg-opacity-75 z-10 my-[5%] mx-[10%] w-[80%]  ">
        <div className="w-[30%] ">
          <img
            className="rounded-lg shadow shadow-white"
            src={MOVIE_IMG_CDN + poster_path}
          ></img>
        </div>
        <div className="w-[50%] px-10">
          <h1 className="text-6xl text-center text-white  font-bold">
            {original_title}
          </h1>
          <h6 className="text-center text-sm py-2 font-bold  italic text-amber-500">
            {tagline}
          </h6>
          <div className=" mx-auto text-white  ">
            <h1 className="text-md italic px-2">{overview}</h1>
          </div>
          <div className="my-2">
            <span className="mr-4 ">Release date: {release_date}</span>
            Genres:
            {genres.map((genre) => (
              <span className="italic font-bold px-1" key={genre.id}>
                {genre.name + ","}
              </span>
            ))}
          </div>
          <div className="text-green-400 font-semibold">
            <span>Budget: ${convertNumber(budget)}</span>
            <span className="px-2">Revenue: ${convertNumber(revenue)}</span>
          </div>
          <div className="my-2">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
              {vote_average} based on {vote_count} votes.
            </span>
          </div>
          <div className="my-2">
            Available in :
            {spoken_languages.map((lang) => (
              <span className="mx-1" key={lang.name}>
                {lang.name}
              </span>
            ))}
          </div>
          <div className="flex my-4 w-fit bg-white py-2">
            {production_companies.map((comp) => (
              <img
                key={comp?.id}
                className="h-8 mx-2 "
                src={
                  comp?.logo_path === null
                    ? null
                    : MOVIE_IMG_CDN + comp?.logo_path
                }
              ></img>
            ))}
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-full h-full fixed"
          src={
            backdrop_path === null
              ? ALT_BG_IMG_CDN
              : MOVIE_IMG_CDN + backdrop_path
          }
        ></img>
      </div>
    </div>
  );
};

export default MovieDetails;
