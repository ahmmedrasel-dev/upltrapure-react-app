/* eslint-disable react/prop-types */
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center mt-5">
      <span className="animated-heading">{title}</span>
    </div>
  );
};

export default SectionTitle;
