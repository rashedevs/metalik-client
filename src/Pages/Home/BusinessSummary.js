import React, { useState } from "react";
import BusinessCard from "./BusinessCard";
import partner from "../../assets/summary/partner.png";
import revenue from "../../assets/summary/revenue.png";
import tools from "../../assets/summary/tools.png";
import review from "../../assets/summary/review.png";

const CountUp = () => {
  const [data] = useState([
    {
      id: 1,
      name: "Partners",
      icon: partner,
      quantity: "180",
      plus: "+",
    },
    {
      id: 2,
      name: "Annual Revenue",
      icon: revenue,
      quantity: "100",
      plus: "M $ ↗︎",
    },
    {
      id: 3,
      name: "Tools",
      icon: tools,
      quantity: "250",
      plus: "+",
    },
    {
      id: 4,
      name: "Reviews",
      icon: review,
      quantity: "34",
      plus: "K+",
    },
  ]);
  return (
    <div className="text-center">
      <h1 className="text-accent text-xl font-bold uppercase">
        Business Summary
      </h1>
      <div className="bg-base-100 my-12 flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {data.map((summary) => (
            <BusinessCard key={summary.id} summary={summary}></BusinessCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountUp;
