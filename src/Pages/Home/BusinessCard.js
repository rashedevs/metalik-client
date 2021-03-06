import React from "react";
import CountUp from "react-countup";

const BusinessCard = ({ summary }) => {
  const { name, icon, quantity } = summary;

  return (
    <div>
      <div>
        <div className="card shadow-3xl border bg-cyan-600">
          <div className="card-body">
            <div>
              <img
                className="w-24 h-16 mx-auto bg-white p-2 rounded-lg"
                src={icon}
                alt="summary icon"
              />
              <p className=" uppercase text-center font-bold text-white mt-3">
                {name}
              </p>
            </div>

            <div>
              <p className="text-4xl text-center font-bold text-yellow-400">
                <CountUp delay={1} end={quantity} duration={5} />
                {summary?.plus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
