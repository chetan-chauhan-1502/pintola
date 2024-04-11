import React from "react";
import "./AboutUs.css";
import About1 from "../../assets/About1.webp";
import About2 from "../../assets/About2.png";

const AboutUs = () => {
  return (
    <>
    <div className="aboutMain">
      <div className="aboutDetail">
        <h1>Our Mission & Vision</h1>
        <p>To serve more than 100 million people with the healthy, delicious and ready-to-eat food products.</p>
        <p>To achieve continuous business growth together with our stakeholders including farmers, exporters and distributors.</p>
        <p>We strive to be the best company in India for peanut butter and related products. We endeavor to achieve this goal by providing competitive products in all means.</p>
      </div>
    </div>
      
      <div className="AboutLast">
        <img src={About1} />
        <img src={About2} />
      </div>
    </>
  );
};

export default AboutUs;
