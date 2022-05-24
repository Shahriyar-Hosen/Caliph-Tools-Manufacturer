import axios from "axios";
import React from "react";

const ManageToolsRow = ({ tool, index, refetch, setUpdate }) => {
    
  const { _id, name, price, quantity } = tool;


  const deleteTools = (id) => {
    // Delete / DELETE Method - delete by id
    const proceed = window.confirm("Are you sure! Delete This orders");
    if (proceed) {
      const url = `https://glacial-falls-86656.herokuapp.com/tools/${id}`;
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
      <td>{name.length > 20 ? name.slice(0, 20) + "..." : name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td className="text-warning font-bold">
        <label
          onClick={() => setUpdate(_id)}
          htmlFor="tools-update"
          className="btn btn-xs bg-green-500 btn-accent text-white border-0"
        >
          Update
        </label>
      </td>
      <td>
        <button
          onClick={() => deleteTools(_id)}
          className="btn btn-xs btn-warning hover:text-black bg-red-400 border-0 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageToolsRow;
