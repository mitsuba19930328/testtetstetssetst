/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const ConcreteComponentNode = ({ className }) => {
  return (
    <div className={`concrete-component-node ${className}`}>
      <div className="content-6">
        <img
          className="photo-3"
          alt="Photo"
          src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-6@2x.png"
        />
        <div className="name-shop-now">
          <div className="name-2">
            <div className="text-wrapper-12">Model 000</div>
            <div className="text-wrapper-13">Navy</div>
          </div>
          <Button button="primary" className="button-7" divClassName="button-8" text="Shop Now" />
        </div>
      </div>
    </div>
  );
};
