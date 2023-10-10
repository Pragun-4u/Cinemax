import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

import { AVATAR_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store?.user);

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
      <div className="flex justify-between">
        <div className="w-1/8 absolute z-10 ">
          <Link to="/">
            <img
              className="  mx-10 my-2 h-20 invert bg-gradient-to-tr  from-white"
              src={LOGO}
            ></img>
          </Link>
        </div>
        <div className=" text-white absolute flex right-0 top-[3%] z-10 ">
          <div className="flex">
            <h1 className=" my-auto mx-2 text-white">
              Hello :{" "}
              <span className="text-orange-300 font-bold">
                {" "}
                {userInfo?.displayName}{" "}
              </span>
            </h1>
            <img
              className="h-14   my-auto"
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
            className="rounded-lg mx-2 px-2 h-10 my-auto text-white hover:bg-red-500 "
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
