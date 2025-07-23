import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../RootLayout/RootLayout";
import logo from "../../../New folder/ami.png"
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    handleSignOut()
      .then(() => {
        toast.success("Signed out successfully");
        navigate("/signin");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My-Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-base-100 shadow-sm">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn p-0 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 p-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>

        <div>
        <a className="btn btn-ghost text-[12px] md:text-xl">Subscription Box </a>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end gap-5">
         <div className="flex items-center">
        <img className="mt-14 md:mt-0 w-7 md:w-11 rounded-full" src={`${user ? user.photoURL : logo}`} alt="" />
        <p className="mt-14 md:mt-0 md:pr-10 lg:pr-0">{user && user.email}</p>
      </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        {user ? (
          <button className="btn btn-primary " onClick={handleLogout}>
            Sign Out
          </button>
        ) : (
          
          <button
          
            className="btn btn-primary"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
