import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [tool, setTool] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [agree, setAgree] = useState(true);

  const navigate = useNavigate();

  // Read / Get Method - Read by ID
  useEffect(() => {
    const toolData = async () => {
      try {
        const res = await axios.get(
          `https://glacial-falls-86656.herokuapp.com/tools/${id}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setTool(res.data);
        setOrderQuantity(res.data.minOrder);
        setTotalPrice(res.data.minOrder * res.data.price);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        toast.error(error.massage);
      }
    };
    toolData();
  }, [id, navigate]);
  // ----------------------------------------

  const { name, img, price, quantity, minOrder, description } = tool;
  const { displayName, email } = user;

  // current date
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  // ==================

  useEffect(() => {
    setTotalPrice(orderQuantity * price);
  }, [orderQuantity, price]);

  if (tool.length === 0) {
    return <Loading></Loading>;
  }

  const orderForm = (event) => {
    event.preventDefault();
    const address = event.target.address.value;
    const inputQuantity = event.target.quantity.value;
    const phone = Number(event.target.phone.value);

    const order = {
      date,
      toolsId: id,
      userName: displayName,
      email,
      phone: phone,
      address: address,
      toolsName: name,
      orderQuantity: inputQuantity,
      price: totalPrice,
      status: "Pending",
      paid: false,
    };

    axios
      .post("https://glacial-falls-86656.herokuapp.com/orders", order, {
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
          toast.success("Your order is successful. Please pay");
          navigate("/dashboard/myOrders");
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
      <h1 className="text-primary text-4xl font-bold text-center my-5">
        Tools Details{" "}
      </h1>
      {/* Tools cards */}
      <div className="hero py-10 bg-yellow-50 text-black  lg:rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <img src={img} alt="" />
            </div>
          </div>
          {/* Tools info */}
          <div className="text-center lg:text-left lg:ml-16">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="py-6 font-sans font-semibold ">
              <p>
                Price: <span className="text-green-600"> ${price}</span>
              </p>
              <p>
                Quantity: <span className="text-green-600">{quantity}</span>
              </p>
              <p>
                Minimum order quantity:{" "}
                <span className="text-green-600">{minOrder}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Tools description*/}
      <div className="card w-full block mx-auto bg-base-100 shadow-lg mb-12">
        <div className="card-body px-14">
          <h2 className="tex-xl font-bold">Tools Description:</h2>
          <p>{description}</p>
        </div>
      </div>

      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        Please confirm order{" "}
      </h1>
      {/* Order Form */}
      <div className="hero py-10 bg-yellow-50">
        <div className="card flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={orderForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={displayName}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="Number"
                  placeholder="Phone"
                  name="phone"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="divider">Total</div>

              <div className="form-control">
                <div className="w-full py-3 border-2 rounded-lg text-center bg-accent bg-opacity-20">
                  Per Unit Price: <span className="font-bold">{price}</span>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="Number"
                  name="quantity"
                  min={minOrder}
                  max={quantity}
                  defaultValue={minOrder}
                  placeholder="Add Quantity"
                  className="input input-bordered"
                  onBlur={(e) => setOrderQuantity(Number(e.target.value))}
                  required
                />
                <label className="label">
                  <span className="label-text">Minimum: {minOrder} </span>
                  <span className="label-text">Maximum: {quantity}</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Price</span>
                </label>

                <div className="w-full py-3 border-2 rounded-lg text-center  font-bold text-secondary">
                  Total: ${totalPrice}
                </div>
              </div>
              <div className="mt-6 flex justify-center mb-2">
                <span className="label-text mr-5 ">Ready to Purchase Now </span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  onClick={() => setAgree(!agree)}
                />
              </div>
              <div className="form-control">
                <button
                  disabled={agree}
                  className="btn bg-gradient-to-r from-accent  to-success border-0 text-white"
                >
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
