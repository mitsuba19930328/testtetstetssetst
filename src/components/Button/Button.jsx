/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ button, className, divClassName, text = "Button" }) => {
  return (
    <button className={`button ${button} ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.oneOf(["rounded", "primary", "disable", "text", "ghost"]),
  text: PropTypes.string,
};
