import React from "react";
import "./Why_Pintola.css";
import wpBanner from "../../assets/wpBanner.webp";
import Wp_1 from "./Wp_1/Wp_1";
import Wp_2 from "./Wp_2/Wp_2";
import Title from "../Home/Title/Title";
import Wp_3 from "./Wp_3/Wp_3";
import wpBannerLast from "../../assets/Wp_1_banner_last.webp";

const Why_Pintola = () => {
  return (
    <>
      <div className="wpBanner">
        <img src={wpBanner} alt="" />
      </div>

      <Wp_1 />
      <Wp_2 />
      <Title titleName={"Happy Customers"} />
      <Wp_3 />

      <div className="wpBannerLast">
        <img src={wpBannerLast} alt="" />
      </div>
    </>
  );
};

export default Why_Pintola;
