import React from "react";
import "./Card3.css";
import CardData3 from "./CardData3.jsx";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice.jsx";

const Card3 = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let ADD = (item) => {
    let items = names.find((cartIteam) => cartIteam.id === item.id);
    if (!items) {
      dispatch(add(item));
    }
  };
  return (
    <>
      <div className="category">
        <Link to={"/"}>
          <span>HOME</span>
        </Link>
        <Link to={"/Store"}>
          <span>ALL PRODUCT</span>
        </Link>
        <span>PAGE 1 OF 2</span>
      </div>

      <div className="card3_main">
        {CardData3.map((item) => {
          return (
            <>
              <div class="card3">
                <img src={item.img} class="card-img-top" alt="..." />
                <span className="Overlytext1">5%off</span>

                <h5 class="cardtitle ">{item.title}</h5>
                <p class="prices ">
                  <span className="from">From</span>{" "}
                  <span className="price">Rs.{item.price}</span>
                  <span className="del">
                    <del>Rs.{item.delprice}</del>
                  </span>
                </p>
                <select class="text-center">
                  <option selected>{item.opt}</option>
                  <option value="1">{item.opt1}</option>
                </select>

                <button class="addtocart w-100" onClick={() => ADD(item)}>
                  Add To Cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card3;
