import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0f1oKV9SXZr5OTG54GyvmiUqNNC7Et3we47Xb0LG9w6H3y26Qz1wVxk99C6mahS85qjc42OW8LoBWYdaAc971J00VYK3Rat9"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/orders/${id}`;

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
//   const { name } = order;
  console.log("order", order);

  return (
    <div className="card w-full lg:w-1/2 my-12 lg:mx-auto bg-base-100 shadow-xl">
      <div className="card w-full bg-base-100 shadow-lg mb-20">
        <div className="card-body">
          <p className="text-success">Hello, {"patientName"}</p>
          <h2 className="card-title text-2xl font-bold">
            Please Pay for {"tools name"}
          </h2>
          <p>
            Your Order Date: <span className="text-orange-700">{"date"}</span>{" "}
          </p>
          <p>Please Pay: ${"price"}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Please provide card information!😊</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
