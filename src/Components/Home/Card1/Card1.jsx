import React from "react";
import "./Card1.css";
import CardData1 from "./CardData1.jsx";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice.jsx";

const Card1 = () => {
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
      <div className="card1_main">
        {CardData1.map((item) => {
          return (
            <>
              <div class="card1">
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

                <button class="addtocart w-100" onClick={() => ADD(item)}>Add To Cart</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card1;
