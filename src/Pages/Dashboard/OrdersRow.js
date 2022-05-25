import React from "react";
import { Link } from "react-router-dom";

const OrdersRow = ({ order, index, refetch, setDeleting }) => {
  const { _id, name, quantity, price, paid, transactionId } = order;
  return (
    <tr key={index} order={order}>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {!paid ? (
          "Unpaid"
        ) : (
          <div>
            <p>
              <span className="text-green-600">Paid</span>
            </p>
            <p>
              Transaction id:{" "}
              <span className="text-blue-600">{transactionId}</span>
            </p>
          </div>
        )}
      </td>
      <td>
        {!paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-xs btn-primary">Pay</button>
          </Link>
        )}
      </td>
      <td>
        {!paid && (
          <label
            onClick={() => setDeleting(order)}
            for="delete-confirm-modal"
            class="btn btn-xs btn-error"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default OrdersRow;
