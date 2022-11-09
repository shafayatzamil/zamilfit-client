import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import icons from "../../../assets/images/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="navbar bg-base-500  my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          ></ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl text-red-500 "
        >
          <img src={icons} className="w-10" />
          ZamilFits
        </Link>
      </div>
      {user && user.uid ? (
        <>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="font-semibold text-xl">
                <Link to="addservice">Add service</Link>
              </li>
              <li className="font-semibold text-xl">
                <Link to="/review">My Review</Link>
              </li>
              <li className="font-semibold text-xl">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <button className="btn btn-outline mr-2" onClick={logOut}>
              logOut
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end">
            <Link to="register">
              <button className="btn btn-outline mr-2">SignIn</button>
            </Link>
            <Link to="login">
              <button className="btn btn-outline btn-accent ">LogIn</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
