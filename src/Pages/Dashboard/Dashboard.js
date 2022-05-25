import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl font-bold text-pink-500 text-center">
          Welcome to Dashboard
        </h2>
        <div className="divider"></div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">
              <span className="text-pink-600 font-semibold">My Profile</span>
            </Link>
          </li>
          {!admin && (
            <li>
              <Link to="/dashboard/orders">
                <span className="text-pink-600 font-semibold">My Orders</span>
              </Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="/dashboard/review">
                <span className="text-pink-600 font-semibold">
                  Add A Review
                </span>
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/manageorders">
                <span className="text-pink-600 font-semibold">
                  Manage All Orders
                </span>
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/addproduct">
                <span className="text-pink-600 font-semibold">
                  Add A Product
                </span>
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/makeadmin">
                <span className="text-pink-600 font-semibold">Make Admin</span>
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/manageproducts">
                <span className="text-pink-600 font-semibold">
                  Manage Products
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
