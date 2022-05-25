import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import { toast } from "react-toastify";

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id, toolsName, orderQuantity, price, status, paid, email } = order;
  const navigate = useNavigate();

  const updateStatus = (id) => {
    if (status === "Shifting") {
      return;
    }
    const updateOrderStatus = {
      status: "Shifting",
    };
    axios
      .put(
        `https://glacial-falls-86656.herokuapp.com/order/${id}`,
        updateOrderStatus,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        if (res.status === 200) {
          toast.success("Order Status Update successfully");
          refetch();
        }
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        toast.error(error.massage);
      });
  };

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you sure! Delete This orders");
    if (proceed) {
      // Delete Method update using id
      const url = `https://glacial-falls-86656.herokuapp.com/orders/${id}`;
      const orderDelete = async () => {
        try {
          const res = await axios.delete(url, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          if (res.data.deletedCount > 0) {
            toast("Delete order");
            refetch();
          }
        } catch (error) {
          if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
          toast.error(error.massage);
        }
      };
      orderDelete();
    }
    // ----------------------------------------
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td title={toolsName}>
        {toolsName.length > 20 ? toolsName.slice(0, 20) + "..." : toolsName}
      </td>
      <td>{email}</td>
      <td>{orderQuantity}</td>
      <td>${price}</td>
      <td className="text-warning font-bold">
        {paid ? (
          <button
            onClick={() => updateStatus(_id)}
            className={`btn btn-xs ${
              status === "Shifting"
                ? "bg-green-500 btn-accent"
                : "bg-secondary btn-success"
            }  text-white border-0`}
          >
            {status}
          </button>
        ) : (
          "Unpaid"
        )}
      </td>
      <td>
        {!paid ? "" : ""}
        <button
          onClick={() => deleteOrder(_id)}
          className="btn btn-xs btn-warning hover:text-black bg-red-400 border-0 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
