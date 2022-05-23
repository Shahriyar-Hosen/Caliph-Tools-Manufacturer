import axios from "axios";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const reviewsData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/reviews");
        setReviews(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    reviewsData();
  }, []);
  
  return (
    <div className="mb-20">
      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        Customers Reviews
      </h1>
      {reviews.length === 0 ? (
        <progress class="progress block w-1/2  mx-auto"></progress>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review._id} reviews={review}></Review>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
