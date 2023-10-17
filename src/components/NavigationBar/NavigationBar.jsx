/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsBlackUnfillShoppingBag } from "../../icons/IconsBlackUnfillShoppingBag";
import { IconsBlackUnfillUser } from "../../icons/IconsBlackUnfillUser";
import { Logo7 } from "../../icons/Logo7";
import "./style.css";

export const NavigationBar = ({ className }) => {
  return (
    <div className={`navigation-bar ${className}`}>
      <div className="navigation">
        <div className="banner-add">
          <p className="p">Free US shipping on order $80+</p>
        </div>
        <div className="navigation-2">
          <div className="frame-4">
            <Logo7 className="logo-7" />
            <div className="link-2">
              <div className="text-wrapper-14">Men</div>
              <div className="text-wrapper-14">Women</div>
              <div className="text-wrapper-14">Accessories</div>
              <div className="text-wrapper-14">About</div>
              <div className="shoe-finder">
                <div className="text-wrapper-15">Shoe Finder Quiz</div>
              </div>
            </div>
          </div>
          <div className="link-2">
            <div className="text-wrapper-14">Support</div>
            <IconsBlackUnfillUser className="icon-instance-node" />
            <IconsBlackUnfillShoppingBag className="icon-instance-node" />
          </div>
        </div>
      </div>
    </div>
  );
};
