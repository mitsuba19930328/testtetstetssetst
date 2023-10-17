/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsBlackUnfillStar2 } from "../../icons/IconsBlackUnfillStar2";
import "./style.css";

export const DivWrapper = ({ className }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="content-4">
        <div className="text-wrapper-10">The Hype is real...</div>
        <div className="content-5">
          <img
            className="photo-2"
            alt="Photo"
            src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-7@2x.png"
          />
          <div className="heading">
            <div className="frame-2">
              <div className="text-wrapper-11">borkat u.</div>
              <div className="frame-3">
                <IconsBlackUnfillStar2 className="icons-black-unfill-star-2" />
                <IconsBlackUnfillStar2 className="icons-black-unfill-star-2" />
                <IconsBlackUnfillStar2 className="icons-black-unfill-star-2" />
                <IconsBlackUnfillStar2 className="icons-black-unfill-star-2" />
                <IconsBlackUnfillStar2 className="icons-black-unfill-star-2" />
              </div>
            </div>
            <p className="these-stylishly">
              These stylishly simple and incredibly comfortable shoes have become such a staple in my daily wardrobe
              that I&#39;m already buying a second pair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
