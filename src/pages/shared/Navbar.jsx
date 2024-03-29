import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { scrollTop } from "../../utils/utils";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [login, setLogin] = useState(location.pathname === "/login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <div className="sticky top-0 left-0 z-50 flex items-center justify-between w-full px-5 py-2 sm:hidden bg-slate-500">
        <Link to={"/"}>
          <p className="text-2xl font-bold text-white" onClick={() => scrollTop()}>
            Islamic<span className="text-white">Pulse</span>
          </p>
        </Link>
        <div className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <HiXMark className="w-10 h-10 text-green-500" />
          ) : (
            <HiBars3 className="w-10 h-10 text-green-500" />
          )}
        </div>
      </div>
      <nav
        className={`flex flex-col sm:flex-row justify-between items-center gap-3 py-3 px-5 sm:px-8 bg-slate-500 sticky sm:top-0 sm:rounded-none z-40 border-b w-full ${isMenuOpen
          ? "top-10 block rounded-md duration-500"
          : "-top-60 hidden sm:top-0 sm:inline-flex"
          }`}
      >
        <Link to={"/"}>
          <p
            className="hidden text-2xl font-bold text-white sm:block"
            onClick={() => scrollTop()}
          >
            Islamic <span className="text-green-400">Pulse</span>
          </p>
        </Link>
        <div className="flex items-center justify-between gap-5">
          <ul className="flex justify-between gap-5 text-lg font-semibold">
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <NavLink
                onClick={() => scrollTop()}
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-green-500 underline underline-offset-2" : ""
                }
              >
                Home
              </NavLink>
            </li>
            {/* <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <NavLink
                onClick={() => scrollTop()}
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? "text-green-500 underline underline-offset-2" : ""
                }
              >
                Blog
              </NavLink>
            </li> */}
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <NavLink
                onClick={() => scrollTop()}
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive ? "text-green-500 underline underline-offset-2" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            {user?.displayName ? (
              <>
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/Ws1r9fp/images.png"
                    }
                    alt="avatar"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  />
                  <span
                    className={`absolute top-1/2 right-full py-2 px-4 bg-gray-700 text-white text-sm rounded-lg ${showTooltip ? "block" : "hidden"
                      }`}
                  >
                    {user?.displayName}
                  </span>
                </div>

                <span
                  onClick={() => logOut()}
                  className="flex items-center justify-center w-10 h-10 text-2xl rounded-full shadow-md cursor-pointer bg-rose-50 text-rose-500 hover:bg-rose-100"
                >
                  <FiLogOut />
                </span>
              </>
            ) : !login ? (
              <Link
                onClick={() => toggleLogin()}
                to={"/login"}
                className="px-3 py-1 text-lg font-semibold text-white bg-green-500 rounded-md"
              >
                Login
              </Link>
            ) : (
              <Link
                onClick={() => toggleLogin()}
                to={"/registration"}
                className="px-3 py-1 text-lg font-semibold duration-200 border border-green-500 rounded-md hover:bg-green-500 hover:text-white"
              >
                Registration
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
