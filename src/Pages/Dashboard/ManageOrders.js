import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrdersRow from "./ManageOrdersRow";
import DeleteModal from "./DeleteModal";

const ManageOrders = () => {
  const [deleting, setDeleting] = useState(null);
  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/order", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-xl text-center text-purple-600 font-semibold my-3">
        Manage All Orders
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Order</th>
              <th>User</th>
              <th>Quantity</th>
              <th>Payment status</th>
              <th>order status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <ManageOrdersRow
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
                setDeleting={setDeleting}
              ></ManageOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleting && (
        <DeleteModal
          deleting={deleting}
          refetch={refetch}
          setDeleting={setDeleting}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageOrders;
