import React from "react";
import "./Store1.css";
import ads2 from "../../assets/ads2.webp";
import Card3 from "./Card3/Card3";

const Store1 = () => {
  return (
    <>
      <div className="ads2">
        <img src={ads2} alt="" />
      </div>

      <Card3 />

      <nav aria-label="Page navigation  ">
        <ul class="pagination justify-content-center mt-5 mb-5">
          <li class="page-item ">
            <button class="page-link">Previous</button>
          </li>
          <li class="page-item ">
            <button class="page-link">1</button>
          </li>
          <li class="page-item">
            <button class="page-link">2</button>
          </li>
          <li class="page-item">
            <button class="page-link">3</button>
          </li>
          <li class="page-item">
            <button class="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Store1;
