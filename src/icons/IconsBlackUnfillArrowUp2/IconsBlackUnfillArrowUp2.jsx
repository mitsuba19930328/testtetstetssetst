/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsBlackUnfillArrowUp2 = ({ color = "#3184FF", className }) => {
  return (
    <svg
      className={`icons-black-unfill-arrow-up-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 12L19 12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M12 5L19 12L12 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

IconsBlackUnfillArrowUp2.propTypes = {
  color: PropTypes.string,
};
