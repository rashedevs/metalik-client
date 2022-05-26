import React from "react";
import catalog from "../../assets/summary/catalog.jpg";

const Catalogue = () => {
  return (
    <div className="my-12">
      <h3 className="text-accent text-xl font-bold text-center uppercase">
        Catalogue
      </h3>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={catalog}
            className="max-w-sm h-80 rounded-lg shadow-2xl"
            alt="catalogue"
          />
          <div className="px-12 mx-6">
            <h1 className="text-4xl font-bold">
              Price updated, Don't miss out!
            </h1>
            <p className="py-6 font-semibold">
              Explore our latest price list & catalogue..
            </p>
            <button className="btn btn-primary text-white font-bold">
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
