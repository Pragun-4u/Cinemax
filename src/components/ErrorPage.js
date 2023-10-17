import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const RouteError = useRouteError();
  const navigate = useNavigate();
  const { status, statusText } = RouteError;
  return (
    <div className="text-center">
      <div>
        <h1 className="text-7xl mt-12">Oops &#128546;</h1>
        <h4 className="text-2xl mt-6">
          {"Error " + status + " : " + statusText}
        </h4>
      </div>
      <img
        className="md:h-96 m-auto"
        alt="Page Not Found Robot"
        id="Error-Page-Robot"
        src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-robot-with-broken-leg-in-plaster-picture-image_8389076.png"
      ></img>
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
        <span className=" md:mt-4 text-xl">GO BACK </span>
      </div>
    </div>
  );
};

export default ErrorPage;
