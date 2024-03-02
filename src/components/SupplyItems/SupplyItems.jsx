import React from "react";
import SupplyItem from "./SupplyItem";
import "./supply.css";

const SupplyItems = () => {
  return (
    <div className="grid grid-cols-1 gap-2 p-4">
      <div className="flex justify-center">
        <span className="animated-heading">
          Our Manufacturing & Supply Items
        </span>
      </div>
      <div className="lg:px-16 mb-8">
        <SupplyItem />
      </div>
    </div>
  );
};

export default SupplyItems;
