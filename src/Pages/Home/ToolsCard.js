import React from "react";

const ToolsCard = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn bg-gradient-to-r from-accent  to-success border-0 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
