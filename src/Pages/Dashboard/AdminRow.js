import axios from "axios";
import React from "react";

const AdminRow = ({ user, refetch }) => {
  const { _id, email, name, img, role } = user;

  const updateStatus = (id) => {
    const updateRole = {
      role: "Admin",
    };
    axios
      .put(`http://localhost:5000/user/${_id}`, updateRole)
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
      const url = `http://localhost:5000/user/${id}`;
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
      <th>
        <div class="avatar">
          <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img ? img : "https://i.ibb.co/jfZpfx0/user.jpg"} alt="" />
          </div>
        </div>
      </th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
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
