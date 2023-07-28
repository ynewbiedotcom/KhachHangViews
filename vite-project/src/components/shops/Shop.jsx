import React from "react";
import Catg from "./Catg";
import Products from "../shopProduct/Products";
import "./style.css";

const Shop = () => {
  return (
    <>
      <section className="shop background">
        <div className="container d-flex">
          <Catg />

          <div className="contentWidth ">
            <div className="heading d_flex">
              <div className="heading-left ms-3">
                <h1>Danh sách sản phẩm</h1>
              </div>
              <div className="heading-right row ">
                <a href="/products">
                  view all <i className="fa-solid fa-caret-right"></i>
                </a>
              </div>
            </div>
            <div className="product-content  row">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
