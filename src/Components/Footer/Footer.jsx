import React, { useState } from "react";
import "./Footer.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";

import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // If validation passes, you can proceed with your form submission logic here
    console.log("Form submitted with email:", email);

    // Reset email field and error state after successful submission
    setEmail("");
    setError("");
  };
  return (
    <>
      <div className="footer">
        <div className="f1">
          <div className="f1data">
            <div className="f1data1">
              <div className="f1iamge">
                <Link to={"/"}>
                  <a href="#">
                    <img
                      src="https://www.pintola.in/cdn/shop/files/Pintola_Logo_PNG_e0a75445-bd35-450f-895e-ece13c165b78_200x.png?v=1668503333"
                      alt=""
                      className="Footerlogo"
                    />
                  </a>
                </Link>
                <p className="f1p">Foolow us :</p>
                <div className="f1icon">
                  <FaSquareXTwitter className="f1icon1" />
                  <SlSocialFacebook className="f1icon1" />
                  <AiOutlineYoutube className="f1icon1" />
                  <FaInstagram className="f1icon1" />
                  <SlSocialLinkedin className="f1icon1" />
                </div>
              </div>
            </div>
            <div className="f1data2">
              <h4 className="f21">Shop</h4>
              <p className="f22">All Products</p>
              <p className="f22">Premium Nut Butters</p>
              <p className="f22">All Natural & Organic</p>
              <p className="f22">Wholegrain Rice Cakes</p>
            </div>
            <div className="f1data3">
              <h4 className="f21">Pintola</h4>
              <p className="f22">About Us</p>
              <p className="f22">Blogs</p>
              <p className="f22">Privacy Policy</p>
              <p className="f22">Terms of Service</p>
              <p className="f22">FAQs</p>
              <p className="f22">Refund & Cancellation Policy</p>
              <p className="f22">Shipping Policy</p>
            </div>
            <div className="f1data4">
              <h3 className="f21">Stay in the loop</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Email*"
                  className="h42"
                />
                <button type="submit" className="f43">
                  Sign Up
                </button>
              </form>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            <div className="f1data5">
              <h4 className="f21">Download Product Catalogue</h4>
              <button className="f52">Download</button>
            </div>
          </div>
        </div>
        <div className="f2">
          <p className="f221 text-start" >&copy; 2024 Pintola.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
