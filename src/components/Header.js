import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <>
      <div className="w-1/8 absolute z-10  ">
        <Link to="/">
          <img
            className="  mx-10 my-2 h-20 invert bg-gradient-to-tr  from-white"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cinemax_2016.svg/1200px-Cinemax_2016.svg.png"
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Header;
