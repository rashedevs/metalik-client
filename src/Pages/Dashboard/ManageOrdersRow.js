import React from "react";

const ManageOrdersRow = ({ order, index, refetch, setDeleting }) => {
  const { name, quantity, paid, status, email } = order;
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
        {paid && <button className="btn btn-xs btn-accent">Shipped Now</button>}
      </td>
    </tr>
  );
};

export default ManageOrdersRow;
