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
      .put(`http://localhost:5000/tools/${id}`, tools)
      .then((res) => {
        if (res.status === 200) {
          console.log("Your Profile Update successfully");
          event.target.reset();
          setUpdate(null);
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="checkbox" id="tools-update" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h1 className="text-3xl font-bold text-center">Update Tools</h1>
          <label
            for="tools-update"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={updateTool} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                required
                placeholder="price"
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                required
                placeholder="quantity"
                class="input input-bordered"
              />
            </div>

            <div class="form-control ">
              <button
                type="submit"
                class="btn bg-gradient-to-r from-accent  to-success border-0 text-white text-lg"
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
