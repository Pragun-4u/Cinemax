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
  const name = userInfo?.displayName?.split(" ");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
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
        className={`absolute w-screen md:px-8 py-2  z-10 flex  md:flex-row md:justify-between`}
      >
        <div className="w-screen md:w-1/8 absolute z-10 md:block flex justify-center  ">
          <Link to="/">
            <img
              alt="LOGO"
              className="  mx-10 my-2 h-16 md:h-20 invert "
              src={LOGO}
            ></img>
          </Link>
        </div>
        {userInfo !== null && (
          <div className=" text-white w-screen  absolute flex items-center justify-center md:justify-end top-[11vh]  md:top-[3%] z-10 py-5 ">
            <div className="flex mr-4 flex-row  ">
              {GPTPage && (
                <select
                  className="bg-black h-6 md:h-auto mt-2 mx-1 text-xs text-white md:p-2 md:px-4 md:my-2"
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
                className="md:p-2 md:px-4 md:m-2 h-6 md:h-auto px-2 py-1  my-auto text-xs md:text-base bg-emerald-300 md:font-bold hover:bg-gray-400 text-black rounded-lg"
              >
                {GPTPage ? "Home" : "Ask GPT"}
              </button>
              <h1 className="my-auto text-xs md:text-base mx-2 md:font-bold bg-black  text-green-500">
                <span className="md:mx-1 text-base  md:font-bold ">
                  {" "}
                  {userInfo?.displayName?.split(" ").slice(0, 1).join("")}{" "}
                </span>
              </h1>
              <img
                className="h-8 md:h-14 shadow shadow-black rounded-lg my-auto"
                src={AVATAR_URL}
                // src={userInfo?.photoUrl}
              />
              <button
                onClick={() => {
                  signOut(auth)
                    .then(() => {})
                    .catch((error) => {
                      navigate("/Error");
                    });
                }}
                className="rounded-lg md:p-2 md:px-4 md:m-2 md:mx-6 h-9 md:h-auto  ml-1 px-2  text-xs md:text-base my-auto bg-red-500 md:font-bold text-white hover:bg-gray-500 "
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
