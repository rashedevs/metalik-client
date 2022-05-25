import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [deleting, setDeleting] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://powerful-bastion-48261.herokuapp.com/tool", {
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
        Manage Products
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price/unit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <ProductRow
                refetch={refetch}
                index={index}
                key={tool._id}
                tool={tool}
                setDeleting={setDeleting}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleting && (
        <DeleteConfirmModal
          deleting={deleting}
          refetch={refetch}
          setDeleting={setDeleting}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;
