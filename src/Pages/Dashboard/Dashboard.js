import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center">
        <h2 className="text-3xl font-bold text-pink-500">
          Welcome to Dashboard
        </h2>
        <div className="divider flex justify-center items-center mx-auto w-1/2"></div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/orders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add A Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
