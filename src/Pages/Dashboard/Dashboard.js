import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="min-h-screen">
      <div className=" flex justify-center items-center my-5">
        {/* menu-vertical lg: */}
        <ul class="menu menu-horizontal bg-info bg-opacity-25 rounded-box text-secondary font-serif">
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/manage">ManageOrders</Link>
          </li>
          <li>
            <Link to="/dashboard/addReviews">Add A Reviews</Link>
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
