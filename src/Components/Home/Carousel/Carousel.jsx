import React from "react";
import "./Carousel.css";
import ads1 from "../../../assets/ads1.webp";
import ads2 from "../../../assets/ads2.webp";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={ads1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0"></div>
          </div>
          <div class="carousel-item">
            <img src={ads2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0 "></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <FaArrowLeft class="carousel-control-l" aria-hidden="true" />

          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <FaArrowRight class="carousel-control-r " aria-hidden="true" />
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
