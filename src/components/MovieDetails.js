import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";
import {
  ALT_BG_IMG_CDN,
  MOVIE_IMG_CDN,
  POSTER_UNAVAILABLE,
} from "../utils/constants";
import convertNumber from "../helper/convertNumber";
import Loader from "./Loader";
import VideoCard from "./VideoCard";
import CastMemberCard from "./CastMemberCard";
import VideoContainer from "./VideoContainer";

const MovieDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showVideo, setshowVideo] = useState(false);
  const MovieDetails = useSelector((store) => store.movie?.MovieDetails);
  useMovieDetails(searchParams.get("searchquery"));
  // const MovieDetails = null;
  if (MovieDetails === null) {
    return (
      <div className="w-screen h-screen bg-slate-800">
        <Loader />
      </div>
    );
  }

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
  // console.log(MovieDetails?.results?.[0].key);
  return (
    <div className="w-screen">
      <div className="absolute text-white rounded-lg  w-screen  justify-center  py-7 bg-black bg-opacity-50 z-10 md:my-[5%] md:mx-[10%] md:w-[80%] ">
        <div className="flex justify-center ">
          <button onClick={() => navigate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="hover:bg-slate-500 w-8 h-8 md:w-14 md:h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="flex justify-center items-center md:w-[30%] ">
            <img
              alt="Poster Page"
              className=" h-[80%] rounded-lg shadow shadow-white"
              src={
                poster_path === null || poster_path === undefined
                  ? POSTER_UNAVAILABLE
                  : MOVIE_IMG_CDN + poster_path
              }
            ></img>
          </div>
          <div className="md:w-[50%] px-2 md:px-10">
            <h1 className="text-4xl md:text-6xl text-center text-white  font-bold">
              {original_title}
            </h1>
            <h6 className="text-center md:text-sm py-2 font-bold  italic text-amber-500">
              {tagline}
            </h6>
            <div className="md:mx-auto text-white  ">
              <h1 className="text-sm md:text-lg italic ">{overview}</h1>
            </div>
            <div className="my-2">
              <h1 className="md:mr-4">
                {" "}
                <span className="text-gray-300"> Release date: </span>{" "}
                <span className="font-bold">{release_date}</span>
              </h1>
              Genres:
              {genres?.map((genre) => (
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
              {spoken_languages?.map((lang) => (
                <span className="mx-1" key={lang.name}>
                  {lang.english_name}
                </span>
              ))}
            </div>
            {production_companies?.[0]?.logo_path !== null && (
              <div className="flex flex-wrap my-4 w-fit bg-white bg-opacity-50 py-2">
                {production_companies?.map((comp) => (
                  <div key={comp?.id} className="m-1">
                    <img
                      className="h-4 md:h-8 mx-2 "
                      src={
                        comp?.logo_path === null ||
                        comp?.logo_path === undefined
                          ? null
                          : MOVIE_IMG_CDN + comp?.logo_path
                      }
                    ></img>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="block">
          <h1 className="text-2xl md:text-3xl my-2 text-center">Cast</h1>
          <div className="flex overflow-x-scroll">
            {MovieDetails?.credits?.map((cast) => (
              <CastMemberCard key={cast.id} {...cast} />
            ))}
          </div>
        </div>
        <div className="block ">
          <div className="flex justify-center my-1">
            <h1 className="text-2xl md:text-3xl md:text-center">Videos</h1>
            {showVideo ? (
              <button onClick={() => setshowVideo(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mx-1 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={() => setshowVideo(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mx-1 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </button>
            )}
          </div>
          {showVideo && (
            <div className="flex overflow-x-scroll">
              {MovieDetails?.results?.map((eachVideo) => (
                <VideoCard key={eachVideo?.id} id={eachVideo?.key} />
              ))}
            </div>
          )}
        </div>
        <div className="block overflow-hidden">
          <VideoContainer
            title={"Recommendations"}
            movies={MovieDetails?.Recommendations}
          />
        </div>
        <div className="block overflow-hidden">
          <VideoContainer title={"Similar"} movies={MovieDetails?.Similar} />
        </div>
      </div>
      <div>
        <img
          alt="Background Image"
          className="w-screen h-screen fixed object-cover"
          src={
            backdrop_path === null || backdrop_path === undefined
              ? ALT_BG_IMG_CDN
              : MOVIE_IMG_CDN + backdrop_path
          }
        ></img>
      </div>
    </div>
  );
};

export default MovieDetails;
