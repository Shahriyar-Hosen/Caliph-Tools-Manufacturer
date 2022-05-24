import axios from "axios";
import React from "react";

const ToolsUpdate = ({ refetch, update: id, setUpdate }) => {
  const updateTool = (event) => {
    event.preventDefault();
    const quantity = Number(event.target.quantity.value);
    const price = Number(event.target.price.value);

    const tools = {
      quantity: quantity,
      price: price,
    };

    console.log("tools", tools);

    axios
      .put(`https://glacial-falls-86656.herokuapp.com/tools/${id}`, tools)
      .then((res) => {
        if (res.status === 200) {
          console.log("Your Tools Update successfully");
          event.target.reset();
          setUpdate(null);
          refetch();
        }
      })
      .catch((error) => console.log(error));
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
