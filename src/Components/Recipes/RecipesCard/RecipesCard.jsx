import React from "react";
import "./RecipesCard.css";
import RecipesData from "./RecipesData.jsx";

const RecipesCard = () => {
  return (
    <>
      <div className="RecipesCard_main">
        {RecipesData.map((item) => {
          return (
            <>
              <div class=" recipes">
                <img src={item.img} alt="..." />
                <p class="name ">{item.title}</p>
                <p class="samay ">{item.rcn}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RecipesCard;
