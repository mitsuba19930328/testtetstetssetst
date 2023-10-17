/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsBlackUnfillFacebook } from "../../icons/IconsBlackUnfillFacebook";
import { IconsBlackUnfillInstagram } from "../../icons/IconsBlackUnfillInstagram";
import { IconsBlackUnfillTwitter2 } from "../../icons/IconsBlackUnfillTwitter2";
import { Logo6 } from "../../icons/Logo6";
import { Button } from "../Button";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="div">
        <div className="sopa">
          <Logo6 className="logo" />
          <div className="div-2">
            <p className="type">
              Stay informed about Sopa with our latest <br />
              releases and founder news.
            </p>
            <Button
              button="ghost"
              className="button-instance"
              divClassName="design-component-instance-node"
              text="Enter email here for updates"
            />
          </div>
        </div>
        <div className="link">
          <div className="div">
            <div className="div-3">
              <div className="text-wrapper-2">Products</div>
              <div className="div-2">
                <div className="text-wrapper-3">Model 000</div>
                <div className="text-wrapper-4">Model 001</div>
                <div className="text-wrapper-4">Laces</div>
                <div className="text-wrapper-4">Masks</div>
                <div className="text-wrapper-4">No-show Socks</div>
                <div className="text-wrapper-4">Crew Socks</div>
                <div className="text-wrapper-4">Gift Cards</div>
              </div>
            </div>
            <div className="div-3">
              <div className="text-wrapper-2">Support</div>
              <div className="div-2">
                <div className="text-wrapper-3">Help Center</div>
                <div className="text-wrapper-4">FAQs</div>
                <div className="text-wrapper-4">Order</div>
                <div className="text-wrapper-4">Order Status</div>
                <div className="text-wrapper-4">Returns &amp; Exchanges</div>
                <div className="text-wrapper-4">Contact Us</div>
              </div>
            </div>
            <div className="div-3">
              <div className="text-wrapper-2">Everything Else</div>
              <div className="div-2">
                <div className="text-wrapper-3">Community</div>
                <div className="text-wrapper-4">Why Sopa</div>
                <div className="text-wrapper-4">About</div>
                <div className="text-wrapper-4">Discount Program</div>
                <div className="text-wrapper-4">Sopa Blog</div>
                <div className="text-wrapper-4">Sopa Ambassadors</div>
              </div>
            </div>
          </div>
          <div className="div-2">
            <div className="div-4">
              <IconsBlackUnfillTwitter2 className="icons-black-unfill" />
              <div className="text-wrapper-5">Twitter</div>
            </div>
            <div className="div-4">
              <IconsBlackUnfillInstagram className="icons-black-unfill" />
              <div className="text-wrapper-5">Instagram</div>
            </div>
            <div className="div-4">
              <IconsBlackUnfillFacebook className="icons-black-unfill" />
              <div className="text-wrapper-5">Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
