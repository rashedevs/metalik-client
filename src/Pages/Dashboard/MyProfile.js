import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>Profile details</h2>
      <p className="text-primary text-2xl">{user.displayName}</p>
      <p className="text-pink-600 font-bold">
        <small>Email: {user.email}</small>
      </p>
    </div>
  );
};

export default MyProfile;
