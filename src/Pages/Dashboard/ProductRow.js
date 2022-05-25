import React from "react";

const ProductRow = ({ tool, index, refetch, setDeleting }) => {
  const { name, img, price } = tool;

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
        <label
          onClick={() => setDeleting(tool)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
