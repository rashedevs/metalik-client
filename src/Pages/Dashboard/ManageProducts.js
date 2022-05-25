import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/tool", {
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
      <h2 className="text-xl text-center text-purple-600 font-semibold p-0 mt-0">
        Manage Products {tools.length}
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
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
