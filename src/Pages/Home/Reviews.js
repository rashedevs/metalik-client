import React from "react";
import Review from "./Review";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus molestiae nam nihil reiciendis numquam? Repellendus optio nihil aut odit.",
    },
    {
      _id: 2,
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus molestiae nam nihil reiciendis numquam? Repellendus optio nihil aut odit.",
    },
    {
      _id: 3,
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus molestiae nam nihil reiciendis numquam? Repellendus optio nihil aut odit.",
    },
    {
      _id: 4,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus molestiae nam nihil reiciendis numquam? Repellendus optio nihil aut odit.",
    },
    {
      _id: 5,
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus molestiae nam nihil reiciendis numquam? Repellendus optio nihil aut odit.",
    },
    {
      _id: 6,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus molestiae nam nihil reiciendis numquam? Repellendus optio nihil aut odit.",
    },
  ];
  return (
    <div className="my-16">
      <div className="text-center">
        <h3 className="text-accent text-xl font-bold uppercase">Reviews</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 my-16">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
