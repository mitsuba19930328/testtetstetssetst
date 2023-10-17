/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsBlackUnfillHelpCircle1 = ({ color = "#75869C", className }) => {
  return (
    <svg
      className={`icons-black-unfill-help-circle-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M9.08997 9.00002C9.32507 8.33169 9.78912 7.76813 10.3999 7.40915C11.0107 7.05018 11.7289 6.91896 12.4271 7.03873C13.1254 7.15851 13.7588 7.52154 14.215 8.06355C14.6713 8.60555 14.921 9.29154 14.92 10C14.92 12 11.92 13 11.92 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M12 17H12.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

IconsBlackUnfillHelpCircle1.propTypes = {
  color: PropTypes.string,
};
