import React from "react";
import { Link } from "react-router-dom";

const ToolsCard = ({ tools, admin }) => {
  const { _id, name, img, description, minOrder, quantity, price } = tools;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title" title={name}>
            {name.length > 30 ? name.slice(0, 30) + "..." : name}
          </h2>
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className=" border-2 p-2 border-green-300 rounded-xl font-serif">
            <div className="flex justify-evenly">
              <div>
                <p className="text-green-700 font-bold border-b border-success  text-lg  mb-1">
                  Price
                </p>{" "}
                <p className="font-sans text-center  font-bold  text-error"> ${price}</p>
              </div>
              <div>
                <p className="text-green-700 font-bold border-b border-success text-center  text-lg mb-1">
                  Quantity
                </p>
                <p className="font">
                  Available: <span className="font-sans font-bold  text-error">{quantity}</span>
                </p>
              </div>
            </div>
            <p className="text-center mt-2">
              Minimum Order: <span className="font-sans font-bold text-error">{minOrder}</span>
            </p>
          </div>
          <div className="card-actions justify-center mt-2">
            <Link
              to={admin ? "/dashboard/manageOrders" : `/purchase${_id}`}
              className="btn bg-gradient-to-r from-accent  to-success border-0 text-white"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
