import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L12cbJTDOnPocbAs5m6PMBXdiqbteLgglmuWGD27n0kuVxy0SEQNpfkcGaPbfR2L5Vp25aPy13wITcRbZws2PKI00jnrThpHR"
);

const Payment = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const url = `https://powerful-bastion-48261.herokuapp.com/orders/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  //   console.log(order);
  return (
    <div>
      <h2 className="text-xl text-center text-purple-600 font-semibold my-3">
        Make Payment
        {/* max-w-md */}
      </h2>
      <div class="card w-100 text-center  bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p class="text-success text-xl font-bold">
            Hello! {user?.displayName}
          </p>
          <h2 class="font-semibold text-center">
            Please pay for <span class="text-orange-700">{order.name}</span>
          </h2>

          <p>
            Total Amount $<span class="text-red-600">{order.price}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-100 text-center shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
