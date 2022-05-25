import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import swal from "sweetalert";

const AdminRow = ({ user: dbUser, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const { displayName } = user;
  const { _id, name, img, role, email: dbEmail } = dbUser;
  const navigate = useNavigate();

  const updateStatus = (id) => {
    const updateRole = {
      role: "Admin",
    };
    axios
      .put(`https://glacial-falls-86656.herokuapp.com/user/${id}`, updateRole, {
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
          toast("Your Profile Update successfully");
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

  const deleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://glacial-falls-86656.herokuapp.com/user/${id}`;
        const userDelete = async () => {
          try {
            const res = await axios.delete(url, {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            if (res.data.deletedCount > 0) {
              swal(" This user has been deleted!", {
                icon: "success",
              });
              toast("Delete User");
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
        userDelete();
      } else {
        swal("Your User file is safe!");
      }
    });

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
          onClick={() => deleteUser(_id)}
          className="btn btn-xs btn-warning hover:text-black bg-red-400 border-0 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
