import React from "react";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  return (
    <div className="my-20">
      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        Tools
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5"></div>
      <ToolsCard></ToolsCard>
    </div>
  );
};

export default Tools;
