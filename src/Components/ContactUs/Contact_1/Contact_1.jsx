import React, { useState } from "react";
import "./Contact_1.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  FaSquareFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Contact_1 = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    email: "",
    phoneNumber: "",
    areaCity: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log("Form submitted:", formData);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.inquiryType) {
      errors.inquiryType = "Please select an inquiry type";
    }
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
    }
    if (!data.areaCity.trim()) {
      errors.areaCity = "Area/City is required";
    }
    if (data.inquiryType === "export" && !data.country.trim()) {
      errors.country = "Country is required for export inquiries";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <>
      <div className="contact1_main">
        <div className="contactl">
          <h1 className="con1">SAY HELLO!</h1>
          <div className="con2">
            <span>
              <b>Company - </b>
            </span>
            Das Foodtech Pvt Ltd
          </div>
          <div className="con2">
            <span>
              <b>Email - </b>
            </span>
            support@pintola.in
          </div>
          <div className="con2">
            <span>
              <b>Phone - </b>
            </span>
            91 78080 58080
          </div>
          <div className="con2">
            <span>
              <b>Corporate Office - </b>
            </span>
            304-305 Ganesh Glory, Jagatpur, SG Highway Ahmedabad- 382481
          </div>
          <div className="con2">
            <span>
              <b>Manufacturing Unit - </b>
            </span>
            Block No. 1234, Salal-Sonasan Road, At. Sonasan, Ta. Prantij, Dist,
            Himatnagar, Gujarat 383210
          </div>
          <div className="con2">
            <span>
              <b>Working Days - </b>
            </span>
            Monday to Saturday
          </div>
          <div className="con2">
            <span>
              <b>Timing - </b>
            </span>
            9am to 6pm
          </div>
          <div className="col3">
            <h1>Follow Us</h1>
          </div>
          <div className="contact_icons">
            <FaSquareXTwitter className="con_icon" />
            <FaSquareFacebook className="con_icon" />
            <FaYoutube className="con_icon" />
            <FaInstagram className="con_icon" />
            <FaLinkedin className="con_icon" />
          </div>
        </div>

        <div className="contactr">
          <p>
            We'd love to hear from you! Fill out our contact form to get in
            touch with our team.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="">What can we help with? *</option>
                <option value="dealership">For Dealership Inquiries</option>
                <option value="export">For Export Inquiries</option>
                <option value="feedback">Feedback</option>
              </select>
              {errors.inquiryType && (
                <span style={{ color: "red" }}>{errors.inquiryType}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number*"
              />
              {errors.phoneNumber && (
                <span style={{ color: "red" }}>{errors.phoneNumber}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="areaCity"
                value={formData.areaCity}
                onChange={handleChange}
                placeholder="Area/City*"
              />
              {errors.areaCity && (
                <span style={{ color: "red" }}>{errors.areaCity}</span>
              )}
            </div>
            {formData.inquiryType === "export" && (
              <div>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country (for export)"
                />
                {errors.country && (
                  <span style={{ color: "red" }}>{errors.country}</span>
                )}
              </div>
            )}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="5"
              ></textarea>
              {errors.message && (
                <span style={{ color: "red" }}>{errors.message}</span>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact_1;
