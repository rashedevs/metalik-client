import React from "react";
import banner from "../../assets/background/banner.png";
import Tool from "./Tool";

const Tools = () => {
  const tools = [
    {
      _id: 1,
      name: "Hammer1",
      img: banner,
      description: "xxxxx xxxxxxx xxxx xxxxxx xxxxx xxx xxxxxxxx xxxxxxxx",
      min_order: 500,
      available_quantity: 18000,
      price: 10,
    },
    {
      _id: 2,
      name: "Hammer2",
      img: banner,
      description: "xxxxx xxxxxxx xxxx xxxxxx xxxxx xxx xxxxxxxx xxxxxxxx",
      min_order: 500,
      available_quantity: 18000,
      price: 11,
    },
    {
      _id: 3,
      name: "Hammer3",
      img: banner,
      description: "xxxxx xxxxxxx xxxx xxxxxx xxxxx xxx xxxxxxxx xxxxxxxx",
      min_order: 500,
      available_quantity: 18000,
      price: 12,
    },
    {
      _id: 4,
      name: "Hammer4",
      img: banner,
      description: "xxxxx xxxxxxx xxxx xxxxxx xxxxx xxx xxxxxxxx xxxxxxxx",
      min_order: 500,
      available_quantity: 18000,
      price: 13,
    },
    {
      _id: 5,
      name: "Hammer5",
      img: banner,
      description: "xxxxx xxxxxxx xxxx xxxxxx xxxxx xxx xxxxxxxx xxxxxxxx",
      min_order: 500,
      available_quantity: 18000,
      price: 14,
    },
    {
      _id: 6,
      name: "Hammer6",
      img: banner,
      description: "xxxxx xxxxxxx xxxx xxxxxx xxxxx xxx xxxxxxxx xxxxxxxx",
      min_order: 500,
      available_quantity: 18000,
      price: 15,
    },
    {
      _id: 7,
      name: "Hammer7",
      img: banner,
      description: "xxxxx xxxxxxx xxxx xxxxxx xxxxx xxx xxxxxxxx xxxxxxxx",
      min_order: 500,
      available_quantity: 18000,
      price: 16,
    },
  ];
  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-accent text-xl font-bold uppercase">Tools</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {tools.slice(0, 6).map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
