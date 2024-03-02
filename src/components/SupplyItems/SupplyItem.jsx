import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const SupplyItem = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 shadow-2xl rounded-xl bg-orange-50">
        <p className="flex items-center gap-2 text-xl">
          <FaHandPointRight className="font-black text-2xl" />
          Water Treatment Plant & Equipment
        </p>
        <p className="flex items-center gap-2 text-xl">
          <FaHandPointRight className=" font-black text-2xl" />
          All Types of MS & SS Tank
        </p>
        <p className="flex items-center gap-2 text-xl">
          <FaHandPointRight className=" font-black text-2xl" />
          Various Types of Industrial Pump
        </p>
        <p className="flex items-center font-semibold text-xl gap-2">
          <FaHandPointRight className=" font-black text-2xl" />
          Resin (Cation, Anion &amp; Mixed bed)
        </p>
        <p className="flex items-center gap-2 text-xl font-semibold">
          <FaHandPointRight className=" font-black text-2xl" />
          Carbon (Coal &amp; Coconut Shell), Anthracite
        </p>
        <p className="flex items-center gap-2 text-xl">
          <FaHandPointRight className=" font-black text-2xl" />
          Manganese Di-Oxide, Manganese Zeolite
        </p>

        <p className="flex items-center gap-2 text-xl">
          <FaHandPointRight className=" font-black text-2xl" />
          All Types of Sand, Gravels &amp; Pebbles
        </p>
      </div>

      <div className="p-4 shadow-2xl rounded-xl bg-orange-50">
        <p className="flex items-center gap-2 text-xl">
          <FaHandPointRight className=" font-black text-2xl" />
          RO Membrane, Cartridge &amp; Housing
        </p>
        <p className="flex items-center gap-2 text-xl">
          {" "}
          <FaHandPointRight className=" font-black text-2xl" />
          Different Types of Water Test Kid
        </p>
        <p className="flex items-center gap-2 text-xl">
          {" "}
          <FaHandPointRight className=" font-black text-2xl" />
          Cooling Tower &amp; Accessories
        </p>
        <p className="flex items-center gap-2 text-xl font-semibold">
          {""}
          <FaHandPointRight className=" font-black text-2xl" /> Chemical (ETP,
          Boiler, Cooling Tower)
        </p>
        <p className="flex items-center gap-2 text-xl font-semibold">
          {" "}
          <FaHandPointRight className=" font-black text-2xl" /> RO Antiscalant
          &amp; Engine Coolant
        </p>
        <p className="flex items-center gap-2 text-xl">
          {" "}
          <FaHandPointRight className=" font-black text-2xl" /> Boiler
          De-Scaling Chemical
        </p>
        <p className="flex items-center gap-2 text-xl">
          {" "}
          <FaHandPointRight className=" font-black text-2xl" /> Consultancy
          Service
        </p>
      </div>
    </div>
  );
};

export default SupplyItem;
