import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const RouteError = useRouteError();
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
        className="h-96 m-auto"
        alt="Page Not Found Robot"
        id="Error-Page-Robot"
        src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-robot-with-broken-leg-in-plaster-picture-image_8389076.png"
      ></img>
    </div>
  );
};

export default ErrorPage;
