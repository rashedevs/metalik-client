import React, { useState } from "react";
import banner from "./../../assets/background/banner.png";
import SummaryCard from "./SummaryCard";
// import { useCountUp } from "react-countup";

const CountUp = () => {
  const [summaries] = useState([
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
    <div>
      <h1 className="text-3xl uppercase font-semibold text-primary mb-5 text-center">
        Our Summary
      </h1>
      <div
        // style={{ backgroundImage: `url(${banner})` }}
        className="bg-accent md:h-screen p-12 flex justify-center items-center "
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {summaries.map((summary) => (
            <SummaryCard key={summary.id} summary={summary}></SummaryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountUp;
