import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/orders?email=${email}`;
    if (user) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyOrders(data));
    }
  }, [myOrders, user]);
  if (!myOrders.length) {
    return <Loading></Loading>;
  }
  // delete a specific order
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myOrders.filter((order) => order._id !== id);
          setMyOrders(remaining);
        });
    }
  };
  return (
    <div>
      <h2>Here is my orders: {myOrders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <tr key={index} order={order}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>
                  {!order.paid ? (
                    "Unpaid"
                  ) : (
                    <div>
                      <p>
                        <span className="text-green-600">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-blue-600">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  {!order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-primary">Pay</button>
                    </Link>
                  )}
                </td>
                <td>
                  {!order.paid && (
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-xs btn-error "
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
