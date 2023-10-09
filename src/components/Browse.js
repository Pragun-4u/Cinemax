import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.user);
  console.log(userInfo);
  console.log(userInfo?.displayName);
  console.log(userInfo?.photoUrl);
  return (
    <div className="w-full flex justify-between bg-black">
      <div>
        <img
          className="  mx-10 py-2 h-20 invert bg-gradient-to-tl from-white"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cinemax_2016.svg/1200px-Cinemax_2016.svg.png"
        ></img>
      </div>
      <div className=" text-white flex">
        <div className="flex">
          <h1 className=" my-auto mx-2 text-white">
            Hello : {userInfo?.displayName}
          </h1>
          <img
            className="h-14   my-auto"
            src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/351efdd5c9879db23df33bde_rw_600.png?h=e1e19e4f0eb5c66ca9eceb0e9438b2ca"
            // src={userInfo?.photoUrl}
          />
        </div>
        <button
          onClick={() => {
            signOut(auth)
              .then(() => {
                navigate("/");
              })
              .catch((error) => {
                navigate("/Error");
              });
          }}
          className="rounded-lg mx-2 px-2 h-10 my-auto text-white hover:bg-red-500 "
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
