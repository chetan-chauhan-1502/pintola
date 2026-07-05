import React from "react";
import "./Wp_1.css";
import wp_1 from "../../../assets/Wp_1.avif";
import wp_2 from "../../../assets/Wp_2.webp";
import wp_3 from "../../../assets/Wp_3.avif";
import wp_4 from "../../../assets/Wp_4.webp";
import wp_5 from "../../../assets/Wp_5.avif";
import wp_6 from "../../../assets/Wp_6.avif";

const Wp_1 = () => {
  return (
    <>
      <div className="wp1_main">
        <div className="wp1">
          <img src={wp_1} alt="" />
          <p>High Quality Product</p>
        </div>
        <div className="wp1">
          <img src={wp_2} alt="" />
          <p>High Protein - High Fiber</p>
        </div>
        <div className="wp1">
          <img src={wp_3} alt="" />
          <p>10 Lakh+ Happy Customer</p>
        </div>
        <div className="wp1">
          <img src={wp_4} alt="" />
          <p>Top Quality Certifications</p>
        </div>
        <div className="wp1">
          <img src={wp_5} alt="" />
          <p>100% Freshly Made</p>
        </div>
        <div className="wp1">
          <img src={wp_6} alt="" />
          <p>More than 5 Lakh+ Reviews</p>
        </div>
      </div>
    </>
  );
};

export default Wp_1;
