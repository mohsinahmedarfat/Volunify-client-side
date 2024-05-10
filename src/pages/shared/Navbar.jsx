import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  return (
    <nav className="relative shadow">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#AD8B73] to-[#CCD5AE] inline-block text-transparent bg-clip-text">
              <Link>Volunify</Link>
            </h1>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <div>
                <NavLink className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#CEAB93] hover:text-gray-600">
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#CEAB93] hover:text-gray-600">
                  Need Volunteer
                </NavLink>
              </div>
              {/* my profile */}
              <div className="relative inline-block transition-colors duration-300 transform lg:mt-0 hover:bg-[#CEAB93] hover:text-gray-600 rounded-md">
                {/* Dropdown toggle button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-10 flex items-center py-1 px-2 text-gray-700 border border-transparent "
                >
                  <span className="mx-1">My Profile</span>
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  className={`absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <Link className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700">
                      Add Volunteer Post
                    </Link>
                  </div>
                  <div>
                    <Link className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700">
                      Manage My Post
                    </Link>
                  </div>
                </div>
              </div>

              {!user ? (
                <>
                  <div>
                    <NavLink
                      to="/login"
                      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#CEAB93] hover:text-gray-600"
                    >
                      Sign in
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/register"
                      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#CEAB93] hover:text-gray-600"
                    >
                      Sign up
                    </NavLink>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <NavLink
                      onClick={logOut}
                      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#CEAB93] hover:text-gray-600"
                    >
                      Sign out
                    </NavLink>
                  </div>
                  {/* profile */}
                  <div className="flex items-center mt-4 lg:mt-0">
                    <button
                      type="button"
                      className="flex items-center focus:outline-none"
                      aria-label="toggle profile dropdown"
                    >
                      <div
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={user?.displayName}
                        className="size-10 overflow-hidden border-2 border-gray-400 rounded-full"
                      >
                        <img
                          referrerPolicy="no-referrer"
                          src={user?.photoURL}
                          className="object-cover w-full h-full"
                          alt="avatar"
                        />
                      </div>
                      <Tooltip id="my-tooltip" />

                      <h3 className="mx-2 text-gray-700 lg:hidden">
                        Khatab wedaa
                      </h3>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
