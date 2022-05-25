import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ tool, index, refetch }) => {
  const { _id, name, img, price } = tool;
  const handleDelete = (id) => {
    const url = `http://localhost:5000/tool/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} deleted successfully`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-12 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
