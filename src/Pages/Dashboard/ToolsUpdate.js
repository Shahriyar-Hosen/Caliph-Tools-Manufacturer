import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import { toast } from "react-toastify";

const ToolsUpdate = ({ refetch, update: id, setUpdate }) => {
  const navigate = useNavigate();

  const updateTool = (event) => {
    event.preventDefault();
    const quantity = Number(event.target.quantity.value);
    const price = Number(event.target.price.value);

    const tools = {
      quantity: quantity,
      price: price,
    };

    axios
      .put(`https://glacial-falls-86656.herokuapp.com/tools/${id}`, tools, {
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
          toast.success("Your Tools Update successfully");
          event.target.reset();
          setUpdate(null);
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

  return (
    <div>
      <input type="checkbox" id="tools-update" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="text-3xl font-bold text-center">Update Tools</h1>
          <label
            htmlFor="tools-update"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={updateTool} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                required
                placeholder="price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                required
                placeholder="quantity"
                className="input input-bordered"
              />
            </div>

            <div className="form-control ">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-accent  to-success border-0 text-white text-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToolsUpdate;
