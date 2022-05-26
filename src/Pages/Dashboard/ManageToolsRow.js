import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import { toast } from "react-toastify";
import swal from "sweetalert";

const ManageToolsRow = ({ tool, index, refetch, setUpdate }) => {
  const navigate = useNavigate();

  const { _id, name, price, quantity } = tool;
  
  const deleteTools = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this tools!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://glacial-falls-86656.herokuapp.com/tools/${id}`;
        const toolsDelete = async () => {
          try {
            const res = await axios.delete(url, {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            if (res.data.deletedCount > 0) {
              swal("This tools has been deleted!", {
                icon: "success",
              });
              toast("Delete Tools");
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
            toast.error(error.message);
          }
        };
        toolsDelete();
      } else {
        swal("Your imaginary file is safe!");
      }
    });
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
