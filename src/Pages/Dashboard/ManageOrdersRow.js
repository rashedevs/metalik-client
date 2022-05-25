import React, { useState } from "react";
import { toast } from "react-toastify";

const ManageOrdersRow = ({ order, index, refetch, setDeleting }) => {
  const [btnstatus, setbtnStatus] = useState(false);
  const { _id, name, quantity, paid, status, email } = order;
  const makeShipped = () => {
    fetch(`https://powerful-bastion-48261.herokuapp.com/order/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setbtnStatus(true);
        toast.success("Shipped successfully");
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{quantity}</td>
      <td>
        {!paid ? (
          <span>
            <p className="text-blue-400 font-semibold">Unpaid</p>
          </span>
        ) : (
          <div>
            <button className="btn btn-xs btn-success">Paid</button>
          </div>
        )}
      </td>
      <td>
        {paid && <button className="btn btn-xs btn-primary">{status}</button>}
      </td>
      <td>
        {!paid && (
          <label
            onClick={() => setDeleting(order)}
            for="delete-confirm-modal"
            class="btn btn-xs btn-error"
          >
            Cancel Now
          </label>
        )}
        {paid && (
          <button
            disabled={btnstatus}
            onClick={makeShipped}
            className="btn btn-xs btn-accent"
          >
            Shipped Now
          </button>
        )}
      </td>
    </tr>
  );
};

export default ManageOrdersRow;
