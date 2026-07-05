import React from "react";
import "./SocialMedia.css";
import { FaInstagram } from "react-icons/fa";
import SocialData from "./SocialData.jsx";

const SocialMedia = () => {
  return (
    <>
      <div className="socialmediatitle">
        <h1>Follow Us On Instagram @Pintola.in</h1>
      </div>
      <div className="socialmedia_main">
        {SocialData.map((item) => {
          return (
            <>
              <div class="image">
                <img src={item.img} alt="" />
                <div class="insta_icon">
                  <FaInstagram className="insta_overly_icon" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SocialMedia;
