import React, { useState } from "react";
import "./TrackYourOrder.css";
import Title from "../Home/Title/Title";
import Tyo from "../../assets/Tyo.png";

const TrackYourOrder = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [orderNumber, setOrderNumber] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [formErrors, setFormErrors] = useState({
    orderNumber: "",
    emailOrPhone: "",
    trackingNumber: "",
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleOrderTrackSubmit = (e) => {
    e.preventDefault();
    // Validation for Order Number and Email/Phone
    let errors = {};
    if (!orderNumber.trim()) {
      errors.orderNumber = "Order number is required";
    }
    if (!emailOrPhone.trim()) {
      errors.emailOrPhone = "Email or Phone number is required";
    }
    setFormErrors(errors);

    // Submit logic here
  };

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    // Validation for Tracking Number
    let errors = {};
    if (!trackingNumber.trim()) {
      errors.trackingNumber = "Tracking number is required";
    }
    setFormErrors(errors);

    // Submit logic here
  };

  return (
    <>
      <Title titleName={"Track your order"} />
      <div className="tyo_main">
        <div className="tyol">
          <img src={Tyo} alt="" />
        </div>

        <div className="tyor">
          <div className="tyor1">
            <button
              className={activeTab === "tab1" ? "tab-btn active" : "tab-btn"}
              onClick={() => handleTabClick("tab1")}
            >
              Order Number
            </button>
            <button
              className={activeTab === "tab2" ? "tab-btn active" : "tab-btn"}
              onClick={() => handleTabClick("tab2")}
            >
              Tracking Number
            </button>
          </div>

          <div
            className="tab-content"
            style={{ display: activeTab === "tab1" ? "block" : "none" }}
          >
            <form className="tyoorder" onSubmit={handleOrderTrackSubmit}>
              <p>
                Enter the information in the box below to check the status of
                your order
              </p>
              <input
                type="text"
                name=""
                placeholder="Order No."
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
              {formErrors.orderNumber && (
                <span className="error">{formErrors.orderNumber}</span>
              )}
              <input
                type="text"
                name=""
                placeholder="Email or Phone number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              {formErrors.emailOrPhone && (
                <span className="error">{formErrors.emailOrPhone}</span>
              )}
              <button type="submit">Track</button>
            </form>
          </div>

          <div
            className="tab-content"
            style={{ display: activeTab === "tab2" ? "block" : "none" }}
          >
            <form className="tyoTrack" onSubmit={handleTrackingSubmit}>
              <p>
                Enter the information in the box below to check the status of
                your order
              </p>
              <input
                type="text"
                name=""
                placeholder="AWB No"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              {formErrors.trackingNumber && (
                <span className="error">{formErrors.trackingNumber}</span>
              )}
              <button type="submit">Track</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackYourOrder;
