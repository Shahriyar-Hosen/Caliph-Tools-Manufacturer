import axios from "axios";
import React from "react";

const AddTools = () => {
  const reviewSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const minOrder = Number(event.target.minOrder.value);
    const quantity = Number(event.target.quantity.value);
    const price = Number(event.target.price.value);
    const img = event.target.img.value;
    const reviewText = event.target.description.value;

    const tools = {
      name: name,
      minOrder: minOrder,
      quantity: quantity,
      price: price,
      img: img,
      description: reviewText,
    };
    
    axios
      .post("https://glacial-falls-86656.herokuapp.com/tools", tools)
      .then((res) => {
        if (res.status === 200) {
          console.log("Your review add successful. Thanks");
          event.target.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1 className="text-4xl font-bold pb-10 bg-yellow-50 text-center text-primary pt-5">
        Add A Tools
      </h1>
      <div className="hero pb-10 bg-yellow-50">
        <div className="card flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={reviewSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tools Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Order</span>
              </label>
              <input
                type="number"
                name="minOrder"
                required
                placeholder="minOrder"
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
                <span className="label-text">Tools images</span>
              </label>
              <input
                type="text"
                name="img"
                required
                placeholder="images"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                required
                className="textarea textarea-bordered h-24"
              ></textarea>
              <label className="label">
                <span className="label-text">
                  Please add description within 300 words
                </span>
              </label>
            </div>

            <div className="form-control ">
              <button className="btn bg-gradient-to-r from-accent  to-success border-0 text-white text-lg">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTools;
