/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Card = ({
  className,
  contentClassName,
  photoClassName,
  photo = "https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-5@2x.png",
  text = "Black",
  text1 = "Model 000",
  text2 = "$145",
}) => {
  return (
    <div className={`card ${className}`}>
      <div className={`content-3 ${contentClassName}`}>
        <img className={`img ${photoClassName}`} alt="Photo" src={photo} />
        <div className="name-price">
          <div className="model">{text1}</div>
          <div className="name-price-2">
            <div className="black">{text}</div>
            <div className="element">{text2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  photo: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
