import React from "react";
import "./hero.css";
import HandIcon from "../Assets/hand_icon.png";
import ArrowIcon from "../Assets/arrow.png"
import HeroImg from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>

        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={HandIcon} alt="handIcon" />
          </div>

          <p>Collections</p>

          <p>For Everybody</p>
        </div>

        <div className="hero-letest-btn">
            <div>Latest Collection</div>
            <img src={ArrowIcon} alt="ArrowIcon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  );
};

export default Hero;
