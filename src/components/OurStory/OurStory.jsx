/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const OurStory = ({
  className,
  photoClassName,
  photo = "https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-8.png",
  buttonText = "Our Story",
  text = "SOPA",
  text1 = "SOPA <br/>was born out of a simple yet powerful concept - creating a shoe that you would choose to wear every single day, and they&#39;ve brought this idea to life in the bustling city of <br/>New York.",
}) => {
  return (
    <div className={`our-story ${className}`}>
      <div className="content">
        <div className="content-2">
          <img className={`photo ${photoClassName}`} alt="Photo" src={photo} />
          <div className="our-story-wrapper">
            <div className="div-5">
              <Button button="primary" className="button-2" divClassName="button-3" text={buttonText} />
              <div className="SOPA">{text}</div>
            </div>
          </div>
        </div>
        <div className="learn-more">
          <p className="SOPA-was-born-out-of">{text1}</p>
          <Button button="rounded" className="button-4" text="Learn More" />
        </div>
      </div>
    </div>
  );
};

OurStory.propTypes = {
  photo: PropTypes.string,
  buttonText: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
