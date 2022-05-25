import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import Review from "./Review";
import { toast } from "react-toastify";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const reviewsData = async () => {
      try {
        const res = await axios.get(
          "https://glacial-falls-86656.herokuapp.com/reviews",
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setReviews(res.data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        toast.error(error.massage);
      }
    };
    reviewsData();
  }, [navigate]);

  return (
    <div className="mb-20">
      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        Customers Reviews
      </h1>
      {reviews.length === 0 ? (
        <progress className="progress block w-1/2  mx-auto"></progress>
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
