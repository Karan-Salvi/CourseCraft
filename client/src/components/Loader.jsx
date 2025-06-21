import React from "react";
import { LuLoaderCircle } from "react-icons/lu";

const Loader = ({ w, h }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LuLoaderCircle className={`animate-spin text-3xl text-blue-700 `} />
    </div>
  );
};

export default Loader;
