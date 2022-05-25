import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, img, name, description, price, available_quantity, min_order } =
    tool;
  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="tool" className="rounded-xl h-56" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-purple-600 font-semibold">{name}</h2>
        <p>
          <span className="text-green-600">Description:</span> {description}
        </p>
        <p>
          <span className="text-green-600">Price:</span> ${price} /unit
        </p>
        <p>
          <span className="text-green-600">Stock Available:</span>{" "}
          {available_quantity} pieces
        </p>
        <p>
          <span className="text-green-600">Minimum Order:</span> {min_order}{" "}
          pieces
        </p>
        <div className="card-actions">
          <button
            className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            onClick={() => navigateToPurchase(_id)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
