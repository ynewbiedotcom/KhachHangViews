import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>New Arrivals </h2>
            </div>
            <div className="heading-right row ">
              <span>
                View all <i className="fa-solid fa-caret-right"></i>
              </span>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
