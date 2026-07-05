import React from "react";
import "./ContactUs.css";
import Banner1 from "../../assets/ContactUs.webp";
import Contact_1 from "./Contact_1/Contact_1.jsx";
import Banner2 from "../../assets/ContactUsLast.webp";

const ContactUs = () => {
  return (
    <>
      <div className="contactBanner">
        <img src={Banner1} alt="" />
      </div>

      <Contact_1 />

      <div className="googlemap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7318.528481968467!2d72.913045!3d23.48699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dc66cd0000001%3A0xabd344b9cbc5a45!2sDas%20Foodtech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1712286782980!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contactBannerLast">
        <img src={Banner2} alt="" />
      </div>
    </>
  );
};

export default ContactUs;
