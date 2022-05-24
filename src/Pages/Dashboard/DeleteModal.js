import React from "react";

const DeleteModal = () => {
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure to cancel ?
          </h3>
          <div class="modal-action">
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
