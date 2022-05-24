import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Users = () => {
  const { data, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-xl text-purple-600 text-center">All users </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} order={user}>
                <th>{index + 1}</th>
                <td>{user.email}</td>

                <td>
                  <button className="btn btn-xs  ">Make Admin</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
