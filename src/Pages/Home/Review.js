import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-accent shadow-xl">
      <div className="card-body items-center text-center text-white">
        <h2 className="card-title">
          Rating: {review.rating}
          <span className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </span>
        </h2>
        <p>{review.description}</p>
      </div>
    </div>
  );
};

export default Review;
