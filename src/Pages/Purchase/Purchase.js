import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.inite";

const Purchase = () => {
  const [tool, setTool] = useState([]);
  const { id } = useParams();
  const [user] = useAuthState(auth);

  // Read / Get Method - Read by ID
  useEffect(() => {
    const toolData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/tools/${id}`);
        setTool(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    toolData();
  }, [id]);
  // ----------------------------------------

  const { name, img, price, quantity, minOrder, description } = tool;
  const { displayName, email } = user;

  return (
    <div>
      <h1 className="text-primary text-4xl font-bold text-center my-5">
        Please confirm order{" "}
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
      <div class="card w-full block mx-auto bg-base-100 shadow-lg mb-10">
        <div class="card-body px-14">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
