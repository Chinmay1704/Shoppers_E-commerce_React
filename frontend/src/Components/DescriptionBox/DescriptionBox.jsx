import React from "react";
import "./descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>

        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          Welcome to our online emporium, where style meets convenience! Explore
          a curated collection of fashion-forward clothing, accessories, and
          more. Immerse yourself in a seamless shopping experience, navigating
          user-friendly categories. Enjoy exclusive deals, secure transactions,
          and prompt deliveries. Our diverse range caters to every taste and
          occasion, ensuring you discover the perfect items to elevate your
          lifestyle. Join us on this digital shopping journey and redefine your
          style effortlessly!
        </p>

        <p>
          Discover a world of possibilities at our online marketplace, where
          innovation meets value. Browse through a myriad of products that span
          fashion, electronics, home essentials, and beyond. Immerse yourself in
          a virtual shopping haven with intuitive navigation and enticing deals.
          Secure transactions and swift deliveries make your shopping experience
          seamless. Elevate your lifestyle with our diverse offerings and
          redefine the way you shop online.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
