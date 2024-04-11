import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/pintola-logo.avif";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(names));
  }, []);

  let price = names.reduce((def, item) => def + item.price * item.quantity, 0);

  return (
    <>
      <div className="ht"></div>
      <div className="navbar">
        <Link to={"/"}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="nav">
          <Link to={"/Store1"}>
            <li>
              <a href="#">Store</a>
            </li>
          </Link>
          <Link to={"Why_Pintola"}>
            <li>
              <a href="#">Why Pintola?</a>
            </li>
          </Link>
          <Link to={"Recipes"}>
            <li>
              <a href="#">Recipes</a>
            </li>
          </Link>
          <Link to={"AboutUs"}>
            <li>
              <a href="#">About Us</a>
            </li>
          </Link>
          <Link to={"ContactUs"}>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </Link>
          <Link to={"TrackYourOrder"}>
            <li>
              <a href="#" id="tyo">
                Track Your Order
              </a>
            </li>
          </Link>
        </ul>
        <div className="icons">
          <Link to={"Login"}>
            <div className="icon">
              <FaRegCircleUser className="i" />
              <p className="iconname">Hello,Sign In</p>
            </div>
          </Link>
          <div className="icon" onClick={togglePopup}>
            <IoSearchOutline className="i" />
            <p className="iconname">Search</p>
          </div>

          <Link to={"Cart"}>
            <div className="notification">
              <span>
                <IoCartOutline className="i" />
              </span>

              <span class="badge">{names.length}</span>
              <p className="iconname">Cart</p>
            </div>
          </Link>
          <Link to={"ContactUs"}>
            <div className="icon">
              <TbPhoneCall className="i" />
              <p className="iconname">Contact</p>
            </div>
          </Link>
        </div>
        <div
          className="fabar"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <FaBarsStaggered className="fabar" />
        </div>
      </div>

      {/* responsive navbar for  */}

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header navclose">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body navItems">
          <ul id="NavBar">
            <Link to={"/Store1"}>
              <li>
                <a href="#">Store</a>
              </li>
            </Link>
            <Link to={"Why_Pintola"}>
              <li>
                <a href="#">Why Pintola</a>
              </li>
            </Link>
            <Link to={"Recipes"}>
              <li>
                <a href="#">Recipes</a>
              </li>
            </Link>
            <Link to={"AboutUs"}>
              <li>
                <a href="#">About Us</a>
              </li>
            </Link>
            <Link to={"ContactUs"}>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </Link>
            <Link to={"TrackYourOrder"}>
              <li>
                <a href="#">Track Your Order</a>
              </li>
            </Link>
            <Link to={"Login"}>
              <li>
                <a href="#">Hello,Sign In</a>
              </li>
            </Link>
            <Link to={"Cart"}>
              <li>
                <a href="#">Cart</a>
              </li>
            </Link>
            <li onClick={togglePopup}>
              <a href="#">Search</a>
            </li>
          </ul>
        </div>
      </div>

      {/* --------------------------search pop up for -------------------------------- */}
      {showPopup && (
        <div className="popup">
          <div className="closeAreabtn">
            <CgClose className="closePopup" onClick={closePopup} />
          </div>

          <div className="searchItems">
            <h1>Search</h1>
            <input
              type="search"
              name=""
              id=""
              placeholder="What are you looking for?"
            />
            <p>
              Commonly searched: Best Seller All Natural & Organic High Protein
              Peanut Butter Peanut Butter Performance Series
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
