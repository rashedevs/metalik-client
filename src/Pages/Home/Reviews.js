import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-16">
      <div className="text-center">
        <h3 className="text-accent text-xl font-bold uppercase">Reviews</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 my-16 px-12">
        {reviews.slice(0, 6).map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
