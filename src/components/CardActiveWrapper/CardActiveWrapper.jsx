/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Card } from "../Card";
import "./style.css";

export const CardActiveWrapper = ({
  card,
  className,
  cardContentClassName,
  cardText = "Black",
  cardPhotoClassName,
  cardPhoto = "https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-5@2x.png",
  cardText1 = "$145",
  cardText2 = "Model 000",
}) => {
  return (
    <div className={`card-active-wrapper ${card} ${className}`}>
      {card === "active" && (
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="liner">
              <div className="liner-2" />
            </div>
            <div className="name-price-3">
              <div className="text-wrapper-6">Model 000</div>
              <div className="name-price-4">
                <div className="text-wrapper-7">Black</div>
                <div className="text-wrapper-8">$145</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {card === "normal" && (
        <Card
          className="card-instance"
          contentClassName={cardContentClassName}
          photo={cardPhoto}
          photoClassName={cardPhotoClassName}
          text={cardText}
          text1={cardText2}
          text2={cardText1}
        />
      )}
    </div>
  );
};

CardActiveWrapper.propTypes = {
  card: PropTypes.oneOf(["active", "normal"]),
  cardText: PropTypes.string,
  cardPhoto: PropTypes.string,
  cardText1: PropTypes.string,
  cardText2: PropTypes.string,
};
