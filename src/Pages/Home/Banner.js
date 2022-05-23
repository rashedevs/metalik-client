import React from "react";
import banner from "../../assets/background/banner.png";

const Banner = () => {
  return (
    <div
      className="hero "
      style={{
        background: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Metalik</h1>
          <h1 className="mb-5 text-3xl font-bold">
            Carpentry Woodworking Tools Manufacturer In Bangladesh
          </h1>
          <p className="mb-5">We ensure quality</p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
