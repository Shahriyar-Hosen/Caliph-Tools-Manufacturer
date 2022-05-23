import React from "react";

const Review = ({ reviews }) => {
  const { name, img, description, rating, date } = reviews;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
        <div className="card-actions justify-between items-center">
          <div>
            <span className="text-xl font-bold t test-secondary">{rating}</span>

            <div className="rating rating-md rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="bg-red-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-red-400 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-yellow-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-yellow-400 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-lime-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-lime-400 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-400 mask mask-star-2 mask-half-2"
                defaultChecked
              />
            </div>
            <h1 className="ml-1">{date}</h1>
          </div>

          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
