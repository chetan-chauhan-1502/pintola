import React from "react";
import "./Wp_2.css";
import Wp_01 from "../../../assets/Wp_01.webp";
import Wp_02 from "../../../assets/Wp_02.webp";
import Wp_03 from "../../../assets/Wp_03.webp";
import Wp_04 from "../../../assets/Wp_04.webp";
import Wp_05 from "../../../assets/Wp_05.webp";
import Wp_06 from "../../../assets/Wp_06.webp";
import Wp_07 from "../../../assets/Wp_07.webp";

const Wp_2 = () => {
  return (
    <>
      <div className="wp2_main">
        <div className="wp2">
          <div className="wp2l">
            <img src={Wp_01} alt="" />
          </div>
          <div className="wp2r">
            <h1>Continuous Roasting</h1>
            <p>
              Handpicked peanuts are then roasted according to batch size.
              Proper process control is followed to get identical roasting of
              every peanut. Roasted peanuts are cooled down & blanched. 100%
              batch inspection is done to assure that Pintola’s customers get
              the top quality products.
            </p>
          </div>
        </div>

        <div className="wp22">
          <div className="wp2ll">
            <h1>Sorting & Grading of Peanuts</h1>
            <p>
              Only uniform big size nutritious peanuts are selected and
              handpicked. Small size peanuts and other dirt particles are
              rejected and removed
            </p>
          </div>
          <div className="wp2rr">
            <img src={Wp_02} alt="" />
          </div>
        </div>

        <div className="wp2">
          <div className="wp2l">
            <img src={Wp_03} alt="" />
          </div>
          <div className="wp2r">
            <h1>Continuous Roasting</h1>
            <p>
              Handpicked peanuts are then roasted according to batch size.
              Proper process control is followed to get identical roasting of
              every peanut. Roasted peanuts are cooled down & blanched. 100%
              batch inspection is done to assure that Pintola’s customers get
              the top quality products.
            </p>
          </div>
        </div>

        <div className="wp22">
          <div className="wp2ll">
            <h1>Sorting</h1>
            <p>
              Over-roasted peanuts are rejected under quality control process
            </p>
          </div>
          <div className="wp2rr">
            <img src={Wp_04} alt="" />
          </div>
        </div>
        <div className="wp2">
          <div className="wp2l">
            <img src={Wp_05} alt="" />
          </div>
          <div className="wp2r">
            <h1>Grinding</h1>
            <p>
              Grinding of the roasted peanuts is done with USA imported
              stainless steel machinery to make ultra smooth paste
            </p>
          </div>
        </div>

        <div className="wp22">
          <div className="wp2ll">
            <h1>Filling The Goodness In Pintola Jars</h1>
            <p>
              Freshly made Pintola All Natural Organic Peanut Butter is filled
              in the jars & packed to get shipped it to you.
            </p>
          </div>
          <div className="wp2rr">
            <img src={Wp_06} alt="" />
          </div>
        </div>
        <div className="wp2">
          <div className="wp2l">
            <img src={Wp_07} alt="" />
          </div>
          <div className="wp2r">
            <h1>Lab Testing</h1>
            <p>
              Every Batch is tested before dispatch so Pintola’s customers get
              100% quality assured product.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wp_2;
