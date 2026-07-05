import React from "react";
import "./Recipes.css";
import Title from "../Home/Title/Title";
import Recipescard from "./RecipesCard/RecipesCard";

const Recipes = () => {
  return (
    <>
      <Title titleName={"Healthy & Delicious Recipes"} />
      <Recipescard />
    </>
  );
};

export default Recipes;
