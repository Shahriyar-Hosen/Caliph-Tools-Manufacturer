import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
        <Link to="/profile" class="justify-between">
          Profile
          <span class="badge">New</span>
        </Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/login">Logout</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-[rgb(255 249 246)]">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>

        <Link to="/" class="btn btn-ghost font-mono text-xl text-primary font-bold uppercase">
          Caliph Tools
        </Link>
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menu}</ul>
      </div>

      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
            </div>
          </label>

          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {profile}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
