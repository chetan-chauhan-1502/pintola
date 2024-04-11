import React from "react";
import "./Card2.css";
import CardData2 from "./CardData2.jsx";

const Card2 = () => {
  return (
    <>
      <div className="card2_main">
        {CardData2.map((item) => {
          return (
            <>
              <div class="card2">
                <div className="card2image">
                  <img src={item.img} class="card-img-top" alt="..." />
                </div>
                <h5 class="cardtitle2 ">{item.title}</h5>
                <div className="card2last">
                  <span className="date me-1">{item.date}</span> |
                  <span className="time ms-1">{item.time}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card2;
