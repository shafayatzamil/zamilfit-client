import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
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
        <Link to='/' className="btn btn-ghost normal-case text-2xl text-red-500 ">ZAMILfit's</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="font-semibold">
            <Link to="/service">Add service</Link>
          </li>
          <li className='font-semibold'><Link to='/review'>My Review</Link></li>
          {/* <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
      <Link to='register' ><button className="btn btn-outline mr-2">SignIn</button></Link>
      <Link to='login'><button className="btn btn-outline btn-accent ">LogInn</button></Link>

      </div>
    </div>
  );
};

export default Header;
