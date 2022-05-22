import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-accent shadow-xl">
      <div class="card-body items-center text-center text-white">
        <h2 class="card-title">Rating: {review.rating}*</h2>
        <p>{review.description}</p>
      </div>
    </div>
  );
};

export default Review;
