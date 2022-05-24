import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const { email } = user;

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    axios.get(`https://glacial-falls-86656.herokuapp.com/orders/${email}`).then((res) => res.data)
  );

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-3 mb-8 border-b-8 border-secondary border-double">
      <div className="overflow-x-auto mb-5">
        <table className="table w-full">
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
            {orders?.map((order, index) => (
              <OrderRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
