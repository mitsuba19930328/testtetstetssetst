/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const CardWrapper = ({ className, text = "Black" }) => {
  return (
    <div className={`card-wrapper ${className}`}>
      <div className="name">
        <div className="frame">
          <div className="text-wrapper-9">Model 000</div>
          <div className="black-2">{text}</div>
        </div>
        <Button button="primary" className="button-5" divClassName="button-6" text="Shop Now" />
      </div>
    </div>
  );
};

CardWrapper.propTypes = {
  text: PropTypes.string,
};
