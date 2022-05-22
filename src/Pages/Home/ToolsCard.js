import React from "react";

const ToolsCard = () => {
  return (
    <div>
      <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn bg-gradient-to-r from-accent  to-success border-0 text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
