import React from "react";
import "./Title.css";

const Title = ({ titleName }) => {
  return (
    <>
      <div className="title">
        <h1>{titleName}</h1>
      </div>
    </>
  );
};

export default Title;
