import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";
import OrderRow from "./OrderRow";
import { toast } from "react-toastify";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const { email } = user;
  const navigate = useNavigate();

  const {
    data: orders,
    error,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    axios
      .get(`https://glacial-falls-86656.herokuapp.com/order/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        return res.data;
      })
  );

  if (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
    toast.error(error.message);
  }

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-3 mb-8 border-b-8 border-secondary border-double">
      <h1 className="text-5xl font-bold font-serif text-primary py-5 text-center">
        My Orders
      </h1>
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
