import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-accent text-xl font-bold uppercase">Tools</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-12">
        {tools.slice(0, 6).map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
