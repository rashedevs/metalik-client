import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import OrdersRow from "./OrdersRow";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const MyOrders = () => {
  const [deleting, setDeleting] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const email = user.email;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://powerful-bastion-48261.herokuapp.com/orders/?email=${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-xl text-center text-purple-600 font-semibold my-3">
        My Orders
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersRow
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
                setDeleting={setDeleting}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleting && (
        <DeleteModal
          deleting={deleting}
          refetch={refetch}
          setDeleting={setDeleting}
        ></DeleteModal>
      )}
    </div>
  );
};

export default MyOrders;
