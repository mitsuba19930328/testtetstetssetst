import React from "react";
import { Button } from "../../components/Button";
import { CardActiveWrapper } from "../../components/CardActiveWrapper";
import { CardWrapper } from "../../components/CardWrapper";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { DivWrapper } from "../../components/DivWrapper";
import { Footer } from "../../components/Footer";
import { NavigationBarWrapper } from "../../components/NavigationBarWrapper";
import { OurStory } from "../../components/OurStory";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-7">
        <Footer className="footer-instance" />
        <div className="SOPA-in-everyday">
          <div className="content-8">
            <div className="heading-2">
              <div className="text-wrapper-22">SOPA in Everyday</div>
              <div className="text-wrapper-23">@sopa</div>
            </div>
            <div className="div-8">
              <img
                className="photo-6"
                alt="Photo"
                src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-60@2x.png"
              />
              <img
                className="photo-6"
                alt="Photo"
                src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-61@2x.png"
              />
              <img
                className="photo-6"
                alt="Photo"
                src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-9@2x.png"
              />
              <img
                className="photo-6"
                alt="Photo"
                src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-62@2x.png"
              />
            </div>
          </div>
        </div>
        <OurStory
          buttonText="Featured"
          className="featured"
          photo="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-10.png"
          photoClassName="our-story-instance"
          text="HUMANS OF NEW YOUK"
          text1="Read our co-founder Sidra’s story about struggle, chasing dreams, and making shoes."
        />
        <OurStory
          buttonText="Our Story"
          className="our-story-2"
          photo="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-8.png"
          text="SOPA"
          text1={
            <>
              SOPA <br />
              was born out of a simple yet powerful concept - creating a shoe that you would choose to wear every single
              day, and they&#39;ve brought this idea to life in the bustling city of <br />
              New York.
            </>
          }
        />
        <div className="introducing-model">
          <div className="content-9">
            <div className="div-9">
              <div className="heading-3">
                <Button button="primary" className="button-9" divClassName="button-10" text="New" />
                <div className="type-2">Introducing Model 001</div>
              </div>
              <img
                className="photo-7"
                alt="Photo"
                src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-11.png"
              />
            </div>
            <div className="div-9">
              <div className="text-wrapper-24">Explore Model 001</div>
              <div className="div-8">
                <div className="card-2">
                  <CardActiveWrapper
                    card="normal"
                    cardContentClassName="card-3"
                    cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-12@2x.png"
                    cardPhotoClassName="card-4"
                    cardText="White"
                    className="design-component-instance-node-2"
                  />
                  <CardActiveWrapper
                    card="normal"
                    cardContentClassName="card-3"
                    cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-5@2x.png"
                    cardText="Black"
                    className="design-component-instance-node-2"
                  />
                </div>
                <CardWrapper className="card-5" text="Navy" />
              </div>
            </div>
            <div className="div-9">
              <div className="text-wrapper-24">Accessoies</div>
              <div className="div-8">
                <CardWrapper className="card-6" text="Black" />
                <div className="card-2">
                  <CardActiveWrapper
                    card="normal"
                    cardContentClassName="card-3"
                    cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-5@2x.png"
                    cardText="Black"
                    cardText1="$12"
                    cardText2="Atoms Stretch Laces"
                    className="design-component-instance-node-2"
                  />
                  <CardActiveWrapper
                    card="normal"
                    cardContentClassName="card-3"
                    cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-15@2x.png"
                    cardText="Black"
                    cardText1="$12"
                    cardText2="Atoms Everyday Mask"
                    className="design-component-instance-node-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="the-hype-is-real">
          <div className="div-8">
            <DivWrapper className="design-component-instance-node-2" />
            <ConcreteComponentNode className="design-component-instance-node-2" />
          </div>
        </div>
        <div className="explore-model">
          <div className="content-10">
            <div className="heading-4">
              <div className="text-wrapper-25">Explore Model 000</div>
              <div className="text-wrapper-26">Shop Now</div>
            </div>
            <div className="card-2">
              <div className="div-8">
                <CardActiveWrapper
                  card="normal"
                  cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-5@2x.png"
                  cardText="Black"
                  cardText1="$145"
                  cardText2="Model 000"
                  className="design-component-instance-node-2"
                />
                <CardActiveWrapper
                  card="normal"
                  cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-16@2x.png"
                  cardText="Black"
                  cardText1="$145"
                  cardText2="Model 000"
                  className="design-component-instance-node-2"
                />
                <CardActiveWrapper
                  card="normal"
                  cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-17@2x.png"
                  cardText="Navy"
                  cardText1="$145"
                  cardText2="Model 000"
                  className="design-component-instance-node-2"
                />
              </div>
              <div className="div-8">
                <CardActiveWrapper
                  card="normal"
                  cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-18@2x.png"
                  cardText="Gray"
                  cardText1="$145"
                  cardText2="Model 000"
                  className="design-component-instance-node-2"
                />
                <CardActiveWrapper
                  card="normal"
                  cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-19@2x.png"
                  cardText="Neon"
                  cardText1="$145"
                  cardText2="Model 000"
                  className="design-component-instance-node-2"
                />
                <CardActiveWrapper
                  card="normal"
                  cardPhoto="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-20@2x.png"
                  cardText="Black and white"
                  cardText1="$145"
                  cardText2="Model 000"
                  className="design-component-instance-node-2"
                />
              </div>
            </div>
            <Button button="primary" className="design-component-instance-node-2" text="Shop Now" />
          </div>
        </div>
        <div className="partner">
          <div className="heading-title-wrapper">
            <div className="heading-title">
              <p className="text-wrapper-27">“These are the most thoughtfully designed sneakers on the market.”</p>
              <div className="logo-3">
                <img
                  className="logo-4"
                  alt="Logo"
                  src="https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/logo-.svg"
                />
                <div className="text-wrapper-28">esquire</div>
                <div className="HUMANS-OF-NEW-YORK">
                  HUMANS OF <br />
                  NEW YORK
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="content-wrapper">
            <div className="content-11">
              <div className="div-9">
                <p className="type-3">
                  Step inside, for <br />
                  comfort and magic <br />
                  await you.
                </p>
                <Button button="primary" className="design-component-instance-node-2" text="Shop Now" />
              </div>
              <div className="pagination">
                <div className="background" />
                <div className="background" />
                <div className="background-2" />
                <div className="background" />
                <div className="background" />
                <div className="background" />
                <div className="background" />
              </div>
            </div>
          </div>
        </div>
        <NavigationBarWrapper className="navigation-bar-instance" navigationBar="navigation-bar" />
      </div>
    </div>
  );
};
