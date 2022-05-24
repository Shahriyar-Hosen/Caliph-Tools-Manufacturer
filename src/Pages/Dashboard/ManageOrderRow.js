import axios from "axios";
import React from "react";

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id, toolsName, orderQuantity, price, status, paid } = order;

  const updateStatus = (id) => {
    const updateOrderStatus = {
      status: "Shifting",
    };
    axios
      .put(`http://localhost:5000/order/${id}`, updateOrderStatus)
      .then((res) => {
        if (res.status === 200) {
          console.log("Order Status Update successfully");
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };

  const deleteOrder = (id) => {
    // Delete / DELETE Method - delete by id
    const proceed = window.confirm("Are you sure! Delete This orders");
    if (proceed) {
      // Delete Method update using id
      const url = `http://localhost:5000/orders/${id}`;
      const addUsers = async () => {
        try {
          const res = await axios.delete(url);
          if (res.data.deletedCount > 0) {
            console.log("delete done");
            refetch();
          }
        } catch (error) {
          console.error(error);
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
