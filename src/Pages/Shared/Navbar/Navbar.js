import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.inite";
import Loading from "../Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  const menu = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  const profile = (
    <>
      <li>
        <Link to="/profile" className="justify-between">
          Profile
          <span className="badge badge-info text-white">New</span>
        </Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        {user ? (
          <Link to="/login" onClick={() => signOut(auth)}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-[rgb(255 249 246)]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost font-mono text-xl text-primary font-bold uppercase"
        >
          Caliph Tools
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co/JtCw84w/user.png"
                }
                alt=""
              />
            </div>
          </label>

          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {profile}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
