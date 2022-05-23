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
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>Description: {description}</p>
        <p>Price: ${price} /unit</p>
        <p>Stock Available: {available_quantity} pieces</p>
        <p>Minimum Order: {min_order} pieces</p>
        <div class="card-actions">
          <button
            class="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
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
