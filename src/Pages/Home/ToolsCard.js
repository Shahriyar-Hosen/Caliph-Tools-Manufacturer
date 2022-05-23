import React from "react";
import { Link } from "react-router-dom";

const ToolsCard = ({ tools }) => {
  const { _id, name, img, description, minOrder, quantity, price } = tools;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <p>Minimum order quantity: {minOrder}</p>
          <div className="card-actions justify-center mt-2">
            <Link
              to={`/purchase:${_id}`}
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
