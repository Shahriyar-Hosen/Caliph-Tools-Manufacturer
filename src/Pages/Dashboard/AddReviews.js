import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";

const AddReviews = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  // current date
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  // ==================

  const reviewSubmit = (event) => {
    event.preventDefault();
    const reviewText = event.target.review.value;
    const retting = Number(event.target.retting.value);
    const name = user?.displayName;
    const img = user?.photoURL;

    const review = {
      name: name,
      img: img,
      retting: retting,
      description: reviewText,
      date,
    };

    axios
      .post("http://localhost:5000/reviews", review)
      .then((res) => {
        if (res.status === 200) {
          console.log("Your order is successful. Please pay");
          // Navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1 class="text-4xl font-bold pb-10 bg-yellow-50 text-center text-primary py-5">
        Add A Reviews
      </h1>
      <div class="hero pb-10 bg-yellow-50">
        <div class="card flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={reviewSubmit} class="card-body">
            <span className="text-center text-md font-bold text-secondary font-mono">
              Date: {date}
            </span>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Retting</span>
              </label>
              <input
                type="number"
                min="1"
                max="5"
                name="retting"
                placeholder="Retting"
                class="input input-bordered"
              />
              <label class="label">
                <span class="label-text">Give a rating between 1 and 5</span>
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Reviews</span>
              </label>
              <textarea
                name="review"
                class="textarea textarea-bordered h-24"
              ></textarea>
              <label class="label">
                <span class="label-text">Please review within 300 words</span>
              </label>
            </div>
            <div class="form-control ">
              <button class="btn btn-primary bg-green-500 text-white text-lg">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
