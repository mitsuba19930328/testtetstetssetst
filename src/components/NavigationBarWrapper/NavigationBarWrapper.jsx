/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsBlackUnfillArrowUp2 } from "../../icons/IconsBlackUnfillArrowUp2";
import { IconsBlackUnfillShoppingBag } from "../../icons/IconsBlackUnfillShoppingBag";
import { IconsBlackUnfillUser } from "../../icons/IconsBlackUnfillUser";
import { Logo7 } from "../../icons/Logo7";
import { Button } from "../Button";
import { NavigationBar } from "../NavigationBar";
import "./style.css";

export const NavigationBarWrapper = ({ navigationBar, className }) => {
  return (
    <div className={`navigation-bar-wrapper ${className}`}>
      {navigationBar === "navigation-bar" && <NavigationBar className="instance-node" />}

      {navigationBar === "navigation-bar-hover" && (
        <div className="navigation-bar-hover">
          <div className="navigation-wrapper">
            <div className="navigation-3">
              <div className="banner-add-2">
                <p className="text-wrapper-16">Free US shipping on order $80+</p>
              </div>
              <div className="navigation-4">
                <div className="frame-5">
                  <Logo7 className="logo-2" />
                  <div className="link-3">
                    <div className="text-wrapper-17">Men</div>
                    <div className="text-wrapper-17">Women</div>
                    <div className="text-wrapper-17">Accessories</div>
                    <div className="text-wrapper-17">About</div>
                    <div className="shoe-finder-2">
                      <div className="text-wrapper-18">Shoe Finder Quiz</div>
                    </div>
                  </div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-17">Support</div>
                  <IconsBlackUnfillUser className="icons-black-unfill-2" />
                  <IconsBlackUnfillShoppingBag className="icons-black-unfill-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="men">
            <div className="content-7">
              <div className="men-card">
                <div className="men-2">
                  <img
                    className="photo-4"
                    alt="Photo"
                    src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-57@2x.png"
                  />
                  <div className="div-6">
                    <Button button="ghost" className="instance-node" text="Model 000" />
                    <div className="text-wrapper-19">Cushiony Comfort</div>
                  </div>
                </div>
                <div className="men-2">
                  <img
                    className="photo-5"
                    alt="Photo"
                    src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-56@2x.png"
                  />
                  <div className="div-6">
                    <Button button="ghost" className="instance-node" text="Model 001" />
                    <div className="text-wrapper-19">Supportive &amp; Durable</div>
                  </div>
                </div>
              </div>
              <div className="div-6">
                <div className="text-wrapper-20">Not sure?</div>
                <div className="take-the-shoe-finder">
                  <p className="text-wrapper-21">Take the Shoe Finder Quiz</p>
                  <IconsBlackUnfillArrowUp2 className="icons-black-unfill-arrow-up-2" color="#3184FF" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

NavigationBarWrapper.propTypes = {
  navigationBar: PropTypes.oneOf(["navigation-bar-hover", "navigation-bar"]),
};
