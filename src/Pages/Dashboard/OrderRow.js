import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import { toast } from "react-toastify";
import swal from "sweetalert";

const OrderRow = ({ order, index, refetch }) => {
  const navigate = useNavigate();

  const { _id, toolsName, orderQuantity, price, status, paid, transactionId } =
    order;

  const showTdId = () => {
    swal(`Your Transaction Id: ${transactionId}`, {
      icon: "success",
    });
    refetch();
  };

  const deleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
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
              swal("Poof! Your order has been deleted!", {
                icon: "success",
              });
              toast("delete done");
              refetch();
            }
          } catch (error) {
            if (
              error.response.status === 401 ||
              error.response.status === 403
            ) {
              signOut(auth);
              localStorage.removeItem("accessToken");
              navigate("/login");
            }
            toast.error(error.massage);
          }
        };
        orderDelete();
      } else {
        swal("Your order is safe!");
      }
    });
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
            to={`/payment/${_id}`}
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
          <button className="btn btn-xs" onClick={() => showTdId()}>
            Transaction Id
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
