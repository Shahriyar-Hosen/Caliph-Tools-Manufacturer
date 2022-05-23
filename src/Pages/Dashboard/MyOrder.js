import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
// import OrderRow from "./OrderRow";

const MyOrder = () => {
  const { data, isLoading } = useQuery("orders", () =>
    axios.get("http://localhost:5000/orders").then((res) => res.data)
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(data);
  return (
    <div className="mx-3">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>quantity</th>
              <th>price</th>
              <th>status</th>
              <th>info</th>
            </tr>
          </thead>
          <tbody>
            {/* {orders?.map((order) => (
              <OrderRow key={order._id} order={order}></OrderRow>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
