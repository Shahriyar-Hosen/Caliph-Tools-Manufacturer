import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";

const AdminRow = ({ user: dbUser, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const { email, displayName } = user;
  const { _id, name, img, role, email: dbEmail } = dbUser;
  const navigate = useNavigate();

  const updateStatus = (id) => {
    const updateRole = {
      role: "Admin",
    };
    axios
      .put(`http://localhost:5000/user/${id}`, updateRole, {
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
        if (res.status === 200) {
          console.log("Your Profile Update successfully");
          refetch();
        }
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        console.log(error.massage);
      });
  };

  const deleteOrder = (id) => {
    // Delete / DELETE Method - delete by id
    const proceed = window.confirm("Are you sure! Delete This orders");
    if (proceed) {
      // Delete Method update using id
      const url = `http://localhost:5000/user/${id}`;
      const addUsers = async () => {
        try {
          const res = await axios.delete(url, {
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
      <td>{dbEmail}</td>
      <td>{role ? "" : "User"}</td>
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
