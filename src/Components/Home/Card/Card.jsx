import React from "react";
import "./Card.css";
import CardData from "./CardData.jsx";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice.jsx";

const Card = () => {
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
      <div className="card_main">
        {CardData.map((item) => {
          return (
            <>
              <div class="card">
                <img src={item.img} class="card-img-top" alt="..." />
                <span className="Overlytext">5%off</span>

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
                  <option value="2">{item.opt2}</option>
                  <option value="3">{item.opt3}</option>
                  <option value="4">{item.opt4}</option>
                  <option value="5">{item.opt5}</option>
                  <option value="6">{item.opt6}</option>
                  <option value="7">{item.opt7}</option>
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

export default Card;
