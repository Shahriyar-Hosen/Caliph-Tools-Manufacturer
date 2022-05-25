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

  const url = `https://glacial-falls-86656.herokuapp.com/orders/${id}`;

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

  const { userName, toolsName, date, orderQuantity, price } = order;

  return (
    <div className="min-h-screen bg-yellow-50 flex justify-center items-center">
      <div className="card w-full lg:w-1/2 my-12 lg:mx-auto bg-base-100 shadow-xl">
        <div className="card w-full bg-base-100 shadow-lg ">
          <div className="card-body">
            <p className="text-success">Hello, {userName}</p>

            <h2 className="card-title text-xl font-bold">{toolsName}</h2>

            <div className="my-3 border-2 p-2 rounded-xl border-success">
              <div className="flex justify-evenly items-center border-b-4 border-secondary border-double pb-2">
                <div className="text-lg text-green-700 font-semibold ">
                  {" "}
                  <p>Tools Quantity</p>
                  <p className="text-center text-error">${orderQuantity}</p>
                </div>
                <div className="text-lg text-green-700 font-semibold ">
                  <p>Total Price</p>
                  <p className="text-center text-error">${price}</p>
                </div>
              </div>
              <button className="block mx-auto my-2 btn btn-sm bg-gradient-to-r from-accent  to-success border-0 text-white">
                Please Pay
              </button>
            </div>

            <p>
              Your Order Date: <span className="text-orange-500">{date}</span>{" "}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Please provide card information!😊</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
