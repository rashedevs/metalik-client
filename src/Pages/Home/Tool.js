import React from "react";

const Tool = ({ tool }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={tool.img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{tool.name}</h2>
        <p>Description: {tool.description}</p>
        <p>Price: ${tool.price} /unit</p>
        <p>Stock Available: {tool.available_quantity} pieces</p>
        <p>Minimum Order: {tool.min_order} pieces</p>
        <div class="card-actions">
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
