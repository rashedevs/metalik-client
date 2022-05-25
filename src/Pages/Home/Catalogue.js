import React from "react";

const Catalogue = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Price updated, Don't miss out!</h1>
          <p class="py-6">Explore our latest price list & catalogue..</p>
          <button class="btn btn-primary text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
