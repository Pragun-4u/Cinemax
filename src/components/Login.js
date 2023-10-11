import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import validate from "../utils/validate";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_CDN } from "../utils/constants";

const Login = () => {
  const [signIn, setSignin] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleformSubmit = () => {
    const Message = validate({
      name: name?.current?.value,
      email: email.current.value,
      password: password.current.value,
    });
    setErrorMessage(Message);

    if (Message) {
      setLoading(false);
      return;
    }

    if (!signIn) {
      setLoading(true);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://www.moderatecontent.com/img/sample_face_3.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              setLoading(true);
            })
            .catch((error) => {
              setErrorMessage(error);
              setLoading(false);
              // ...
            });
          console.log(user);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User already Exists. Try Signing in.");
          // setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      setLoading(true);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(errorCode + " ");
          setErrorMessage("Check Email and Password. Try again.");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen bg-cover bg-no-repeat"
          src={BG_IMG_CDN}
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 "
      >
        <h1 className="text-4xl font-bold mb-3">
          {signIn ? "Sign in" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            className="w-full my-4 py-3 px-4 bg-zinc-700 rounded-md"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="w-full my-4 py-3 px-4 bg-zinc-700 rounded-md"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          className="w-full my-4 py-3 px-4 bg-zinc-700 rounded-md"
          type="password"
          placeholder="Password"
        ></input>
        <span className="text-lg font-bold text-red-400">{ErrorMessage}</span>
        <div className="w-full font-bold text-center  text-lg mt-8 py-4 bg-red-700  rounded-md">
          {Loading ? (
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="h-6 mr-2 w-full  text-center  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <button
              onClick={handleformSubmit}
              className="w-full  font-bold text-lg "
            >
              {signIn ? "Sign in" : "Sign Up"}
            </button>
          )}
        </div>

        <p className="my-4 text-center ">
          <span className="text-md px-2 text-gray-200">
            {signIn ? "New to Cinemax?" : "Already an user? "}
          </span>{" "}
          <span
            onClick={() => {
              setSignin(!signIn);
            }}
            className="text-xl font-bold hover:underline cursor-pointer"
          >
            {signIn ? "Sign Up Now" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
