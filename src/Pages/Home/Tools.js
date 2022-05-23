import axios from "axios";
import React, { useEffect, useState } from "react";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const toolsDataLoad = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tools");
        setTools(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    toolsDataLoad();
  }, []);

  return (
    <div className="my-20">

      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        Tools
      </h1>

      {tools.length === 0 ? (
        <progress class="progress block w-1/2  mx-auto"></progress>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
          {tools.map((tool) => (
            <ToolsCard key={tool._id} tools={tool}></ToolsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tools;
