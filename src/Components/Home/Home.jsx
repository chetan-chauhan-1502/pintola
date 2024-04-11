import React from "react";
import Carousel from "./Carousel/Carousel";
import Title from "./Title/Title";
import Card from "./Card/Card";
import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import SocialMedia from "./SocialMedia/SocialMedia";

const Home = () => {
  return (
    <>
      <Carousel />
      <Title titleName={"Shop Our Best Seller"} />
      <Card />
      <Title titleName={"Newly Launched"} />
      <Card1 />
      <Title titleName={"Recent Blogs"} />
      <Card2 />
      <SocialMedia />
    </>
  );
};

export default Home;
