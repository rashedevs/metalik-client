import React from "react";
import banner from "../../assets/background/banner.png";

const Banner = () => {
  return (
    <div
      class="hero "
      style={{
        background: `url(${banner})`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Metalik</h1>
          <h1 class="mb-5 text-3xl font-bold">
            Carpentry Woodworking Tools Manufacturer In Bangladesh
          </h1>
          <p class="mb-5">We ensure quality</p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
