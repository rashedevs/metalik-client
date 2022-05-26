import React, { useState } from "react";
import banner from "./../../assets/background/banner.png";
import BusinessCard from "./BusinessCard";

const CountUp = () => {
  const [data] = useState([
    {
      id: 1,
      name: "Dealers",
      icon: banner,
      quantity: "200",
      plus: "+",
    },
    {
      id: 2,
      name: "Annual Revenue",
      icon: banner,
      quantity: "125",
      plus: "M",
    },
    {
      id: 3,
      name: "Parts",
      icon: banner,
      quantity: "300",
      plus: "+",
    },
    {
      id: 4,
      name: "Reviews",
      icon: banner,
      quantity: "234",
      plus: "+",
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
