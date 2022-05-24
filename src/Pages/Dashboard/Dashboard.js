import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="min-h-screen">
      <div className=" flex justify-center items-center my-5">
        {/* menu-vertical lg: */}
        <ul className="menu menu-vertical md:menu-horizontal bg-info bg-opacity-25 rounded-box text-secondary font-serif">
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/addReviews">Add A Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/manage">Manage All Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/makeAdmin">Make Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/addTools">Add A Tools</Link>
          </li>
          <li>
            <Link to="/dashboard/manageTools">Manage A Tools</Link>
          </li>
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
