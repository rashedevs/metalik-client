import React from "react";
import { useForm } from "react-hook-form";

const AddAReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex justify-center items-center my-6">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add Review</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                placeholder="Enter Rating (1-5)"
                className="input input-bordered w-full max-w-xs"
                {...register("rating", {
                  required: {
                    value: true,
                    message: "Rating is required",
                  },
                  min: {
                    value: 1,
                    message: "Rating must be (1 to 5)",
                  },
                  max: {
                    value: 5,
                    message: "Rating must be (1 to 5)",
                  },
                })}
              />
              <label className="label">
                {errors.rating?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
                {errors.rating?.type === "min" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
                {errors.rating?.type === "max" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                type="text"
                placeholder="Your Review"
                className="input input-bordered w-full max-w-xs"
                {...register("review", {
                  required: {
                    value: true,
                    message: "Review is required",
                  },
                })}
              />
              <label className="label">
                {errors.review?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.review.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn btn-primary text-white w-full max-w-xs font-bold"
              value="Add"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;
