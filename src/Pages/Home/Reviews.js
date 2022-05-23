import React from "react";
import Review from "./Review";

const Reviews = () => {
  
  return (
    <div className="mb-20">
      <h1 className="text-primary text-4xl font-bold text-center mb-5">Customers Reviews</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
        <Review></Review>
      </div>
    </div>
  );
};

export default Reviews;
