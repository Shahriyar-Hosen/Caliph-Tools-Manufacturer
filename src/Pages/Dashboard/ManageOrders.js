import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    axios.get("http://localhost:5000/orders").then((res) => res.data)
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-3 h-full mb-8 border-b-8 border-secondary border-double">
      <div class="overflow-x-auto mb-5">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>quantity</th>
              <th>price</th>
              <th>status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageOrderRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></ManageOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
