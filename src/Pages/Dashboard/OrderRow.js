import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";

const OrderRow = ({ order, index, refetch }) => {
  const navigate = useNavigate();
  
  const { _id, toolsName, orderQuantity, price, status, paid } = order;

  const deleteOrder = (id) => {
    // Delete / DELETE Method - delete by id
    const proceed = window.confirm("Are you sure! Delete This orders");
    if (proceed) {
      // Delete Method update using id
      const url = `http://localhost:5000/orders/${id}`;
      const addUsers = async () => {
        try {
          const res = await axios.delete(url,{
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          if (res.data.deletedCount > 0) {
            console.log("delete done");
            refetch();
          }
        } catch (error) {
          if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
          console.log(error.massage);
        }
      };
      addUsers();
    }
    // ----------------------------------------
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td title={toolsName}>
        {toolsName.length > 20 ? toolsName.slice(0, 20) + "..." : toolsName}
      </td>
      <td>{orderQuantity}</td>
      <td>${price}</td>
      <td className="text-green-500">
        {paid ? (
          status
        ) : (
          <Link
            to="/payment"
            className="btn btn-xs btn-info bg-green-500 border-0 text-white"
          >
            Pay
          </Link>
        )}
      </td>
      <td>
        {!paid ? (
          <button
            onClick={() => deleteOrder(_id)}
            className="btn btn-xs btn-warning hover:text-black bg-red-400 border-0 text-white"
          >
            Delete
          </button>
        ) : (
          <span>Transaction Id</span>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
