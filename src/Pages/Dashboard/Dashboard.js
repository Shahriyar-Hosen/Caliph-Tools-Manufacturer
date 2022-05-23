import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" flex justify-center items-center my-5">
      {/* menu-vertical lg: */}
      <ul class="menu menu-horizontal bg-info bg-opacity-25 rounded-box text-secondary font-serif">
        <li>
          <Link to="/dashboard">My Order</Link>
        </li>
        <li>
          <Link to="/dashboard">Add A Reviews</Link>
        </li>
        <li>
          <Link to="/dashboard">My Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
