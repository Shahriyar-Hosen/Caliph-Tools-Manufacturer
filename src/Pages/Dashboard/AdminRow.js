import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";

const AdminRow = ({ user: dbUser, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const { email, displayName } = user;
  const { _id, name, img, role } = dbUser;

  const updateStatus = (id) => {
    const updateRole = {
      role: "Admin",
    };
    axios
      .put(`https://glacial-falls-86656.herokuapp.com/user/${id}`, updateRole)
      .then((res) => {
        if (res.status === 200) {
          console.log("Your Profile Update successfully");
          refetch();
          // Navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  };

  const deleteOrder = (id) => {
    // Delete / DELETE Method - delete by id
    const proceed = window.confirm("Are you sure! Delete This orders");
    if (proceed) {
      // Delete Method update using id
      const url = `https://glacial-falls-86656.herokuapp.com/user/${id}`;
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

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img ? img : "https://i.ibb.co/jfZpfx0/user.jpg"} alt="" />
          </div>
        </div>
      </th>
      <td>{name || displayName ? name || displayName : "User Name"}</td>
      <td>{email}</td>
      <td>{role ? role : "User"}</td>
      <td className="text-warning font-bold">
        {role ? (
          <button
            className={`btn btn-xs bg-green-500 btn-accent  text-white border-0`}
          >
            {role}
          </button>
        ) : (
          <button
            onClick={() => updateStatus(_id)}
            className={`btn btn-xs btn-secondary  text-white border-0`}
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
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

export default AdminRow;
