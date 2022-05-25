import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ deleting, refetch, setDeleting }) => {
  const { _id, name } = deleting;
  const handleDelete = (id) => {
    const url = `https://powerful-bastion-48261.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} cancelled successfully`);
          setDeleting(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure to cancel {name} ?
          </h3>
          <p class="py-4">Order {name} will be cancelled.</p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              class="btn btn-xs btn-error"
            >
              Yes
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
