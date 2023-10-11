export const LOGO =
  "https://unicorn-cdn.b-cdn.net/b07bb42f-73d5-4169-9ef1-83220ca85090/cinemax-logo.png";

export const AVATAR_URL =
  "https://pro2-bar-s3-cdn-cf2.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/351efdd5c9879db23df33bde_rw_600.png?h=e1e19e4f0eb5c66ca9eceb0e9438b2ca";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_API_OPTION,
  },
};
export const BG_IMG_CDN =
  "https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg";

export const MOVIE_IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const LangKey = [
  { identifier: "en", value: "English" },
  { identifier: "hindi", value: "Hindi" },
  { identifier: "marathi", value: "Marathi" },
];
