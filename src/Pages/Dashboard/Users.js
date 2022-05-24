import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersRow from "./UsersRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://powerful-bastion-48261.herokuapp.com/user", {
      method: "GET",
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
      <h2 className="text-xl text-purple-600 text-center">All users </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UsersRow
                key={user._id}
                index={index}
                refetch={refetch}
                user={user}
              ></UsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
