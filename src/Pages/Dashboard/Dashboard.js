import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.inite";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <section className="min-h-screen">
      <div className=" flex justify-center items-center my-5">
        
        <ul className="menu menu-vertical md:menu-horizontal bg-info bg-opacity-25 rounded-box text-secondary font-serif">
          {admin ? (
            <>
              <li>
                <Link to="/dashboard/manageOrders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addTools">Add A Tools</Link>
              </li>
              <li>
                <Link to="/dashboard/manageTools">Manage Tools</Link>
              </li>
              <li>
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/myOrders">My Order</Link>
              </li>
              <li>
                <Link to="/dashboard/addReviews">Add A Reviews</Link>
              </li>
            </>
          )}

          <li>
            <Link to="/dashboard">My Profile</Link>
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
