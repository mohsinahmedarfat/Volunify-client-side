import { Link } from "react-router-dom";
import errorPageImg from "../assets/404.svg";

const ErrorPage = () => {
  return (
    <section className="bg-white ">
      <div className="container min-h-screen px-20 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-[#AD8B73]">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for does not exist.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#D4A373] rounded-lg shrink-0 sm:w-auto hover:bg-[#AD8B73]">
              <Link to="/">Take me home</Link>
            </button>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            className="w-full max-w-lg lg:mx-auto"
            src={errorPageImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
