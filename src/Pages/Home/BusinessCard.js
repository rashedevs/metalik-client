import React from "react";
import CountUp from "react-countup";

const BusinessCard = ({ summary }) => {
  const { name, icon, quantity } = summary;

  return (
    <div>
      <div>
        <div className="card shadow-xl border bg-cyan-600">
          <div className="card-body">
            <div>
              <img
                className="w-20 mx-auto bg-white p-2 rounded-lg"
                src={icon}
                alt=""
              />
              <p className=" uppercase text-center font-bold text-white mt-2">
                {name}
              </p>
            </div>

            <div>
              <p className="text-5xl text-center font-bold text-white">
                <CountUp delay={2} end={quantity} duration={5} />
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
