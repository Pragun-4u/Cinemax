import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LangKey, LOGO } from "../utils/constants";

import { AVATAR_URL } from "../utils/constants";
import { toggleshowGPTPage } from "../utils/GPTSlice";
import { changeAppLanguage } from "../utils/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store?.user);
  const GPTPage = useSelector((store) => store.GPT.showGPTPage);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div
        className={`absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between`}
      >
        <div className="w-1/8 absolute z-10  ">
          <Link to="/">
            <img className="  mx-10 my-2 h-20 invert " src={LOGO}></img>
          </Link>
        </div>
        {userInfo !== null && (
          <div className=" text-white absolute flex right-0 top-[3%] z-10 py-5 ">
            <div className="flex">
              {GPTPage && (
                <select
                  className="bg-black text-white p-2 px-4 my-2"
                  onChange={(e) => dispatch(changeAppLanguage(e.target.value))}
                >
                  {LangKey.map((eachLang) => (
                    <option
                      key={eachLang.identifier}
                      value={eachLang.identifier}
                    >
                      {eachLang.value}
                    </option>
                  ))}
                </select>
              )}
              <button
                onClick={() => dispatch(toggleshowGPTPage())}
                className="p-2 px-4 m-2 bg-emerald-600 font-bold hover:bg-gray-400 text-black rounded-lg"
              >
                {GPTPage ? "Go Home" : "Ask GPT"}
              </button>
              <h1 className=" my-auto mx-2 font-bold bg-gradient-to-r from-black  text-amber-500">
                Hello :{" "}
                <span className="    mx-1 text-white font-bold bg-gradient-to-l from-black">
                  {" "}
                  {userInfo?.displayName}{" "}
                </span>
              </h1>
              <img
                className="h-14 shadow shadow-black rounded-lg my-auto"
                src={AVATAR_URL}
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
              className="rounded-lg mx-2 px-2 h-10 my-auto bg-red-500 font-bold text-white hover:bg-gray-500 "
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
