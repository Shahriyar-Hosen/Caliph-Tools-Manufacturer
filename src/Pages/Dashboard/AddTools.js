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
      .post("http://localhost:5000/tools", tools)
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
      <h1 class="text-4xl font-bold pb-10 bg-yellow-50 text-center text-primary pt-5">
        Add A Tools
      </h1>
      <div class="hero pb-10 bg-yellow-50">
        <div class="card flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={reviewSubmit} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Tools Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Minimum Order</span>
              </label>
              <input
                type="number"
                name="minOrder"
                required
                placeholder="minOrder"
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
                <span class="label-text">Tools images</span>
              </label>
              <input
                type="text"
                name="img"
                required
                placeholder="images"
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                name="description"
                required
                class="textarea textarea-bordered h-24"
              ></textarea>
              <label class="label">
                <span class="label-text">
                  Please add description within 300 words
                </span>
              </label>
            </div>

            <div class="form-control ">
              <button class="btn bg-gradient-to-r from-accent  to-success border-0 text-white text-lg">
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
