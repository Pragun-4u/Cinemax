import React from "react";
import { MOVIE_IMG_CDN, PROFILE_IMG_UNAVAILABLE } from "../utils/constants";

const CastMemberCard = ({ original_name, profile_path, character }) => {
  //   console.log(original_name, profile_path, character);

  return (
    <div>
      <div className="mx-2">
        <div className="w-36 h-36 rounded-full overflow-hidden">
          <img
            alt="Profile Picture"
            className="w-full h-full"
            src={
              profile_path === null || profile_path === undefined
                ? PROFILE_IMG_UNAVAILABLE
                : MOVIE_IMG_CDN + profile_path
            }
          ></img>
        </div>
        <h1 className="font-bold text-center">{original_name}</h1>
        <h1 className="text-sm text-center text-slate-400">{character}</h1>
      </div>
    </div>
  );
};

export default CastMemberCard;
