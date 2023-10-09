import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import Header from "./Header";
const Browse = () => {
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.user);
  const { displayName } = userInfo;
  const Name = displayName.split(" ");
  return (
    <>
      <div className="w-full flex justify-between h-24 bg-black">
        <div>
          <Header />
        </div>
        <div className=" text-white flex">
          <div className="flex">
            <h1 className=" my-auto mx-2 text-white">
              Hello :{" "}
              <span className="text-orange-300 font-bold"> {Name[0]} </span>
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
                .then(() => {})
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
      <div className="bg-gray-800 h-screen"></div>
    </>
  );
};

export default Browse;
