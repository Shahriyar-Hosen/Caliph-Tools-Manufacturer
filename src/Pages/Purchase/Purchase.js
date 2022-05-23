import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [tool, setTool] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Read / Get Method - Read by ID
  useEffect(() => {
    const toolData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/tools/${id}`);
        setTool(res.data);
        setOrderQuantity(res.data.minOrder);
        setTotalPrice(res.data.minOrder * res.data.price);
      } catch (error) {
        console.error(error);
      }
    };
    toolData();
  }, [id]);
  // ----------------------------------------

  const { name, img, price, quantity, minOrder, description } = tool;
  const { displayName, email } = user;

  if (tool.length === 0) {
    return <Loading></Loading>;
  }

  const order = (value) => {
    if (minOrder <= orderQuantity && quantity >= orderQuantity) {
      setOrderQuantity(orderQuantity + value);
      setTotalPrice(orderQuantity * price);
    }
  };

  const orderForm = (event) => {
    event.preventDefault();
    const name = displayName;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const inputQuantity = event.target.quantity.value;
    const inputTotal = event.target.total.value;

    console.log(name, email, address, phone, inputQuantity, inputTotal);
  };
  return (
    <div>
      <h1 className="text-primary text-4xl font-bold text-center my-5">
        Tools Details{" "}
      </h1>
      {/* Tools cards */}
      <div class="hero py-10 bg-yellow-50 text-black  lg:rounded-lg">
        <div class="hero-content flex-col lg:flex-row">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <img src={img} alt="" />
            </div>
          </div>
          {/* Tools info */}
          <div class="text-center lg:text-left lg:ml-16">
            <h1 class="text-2xl font-bold">{name}</h1>
            <div class="py-6">
              <p>Price: ${price}</p>
              <p>Quantity: {quantity}</p>
              <p>Minimum order quantity: {minOrder}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tools description*/}
      <div class="card w-full block mx-auto bg-base-100 shadow-lg mb-12">
        <div class="card-body px-14">
          <p>{description}</p>
        </div>
      </div>

      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        Please confirm order{" "}
      </h1>
      {/* Order Form */}
      <div class="hero py-10 bg-yellow-50">
        <div class="card flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={orderForm}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={displayName}
                  disabled
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  disabled
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="Number"
                  placeholder="Phone"
                  name="phone"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="divider">Total</div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>

                <input
                  type="text"
                  placeholder="Quantity"
                  name="quantity"
                  class="input input-bordered"
                  defaultValue={orderQuantity}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Total Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Total Price"
                  name="total"
                  class="input input-bordered"
                  defaultValue={totalPrice}
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn bg-gradient-to-r from-accent  to-success border-0 text-white">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
