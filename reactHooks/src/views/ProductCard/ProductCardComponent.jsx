import React, { useEffect, useState } from "react";
import "./productCard.scss";
import StatusBadgeComponent from "./StatusBadgeComponent";
import FavoriteButtonComponent from "./FavoriteButtonComponent";
const ProductCardComponent = () => {
  return (
    <>
      <div className="col-4 mt-4">
        <div className="card text-start ">
          <div className="position-relative">
            <img
              className="card-img-top"
              src="https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"
              alt="Title"
            />
            <StatusBadgeComponent />

            <FavoriteButtonComponent></FavoriteButtonComponent>

            <div className="position-absolute bottom-0 start-0 mb-1 ms-1 shopBtn">
              <button className="btn btn-success ">Mua Ngay!</button>
            </div>
          </div>

          <div className="card-body text-center">
            <h4 className="card-title">
              <strong>Tên Sản Phẩm</strong>
            </h4>
            <h6 className="card-text">Hãng - Dòng</h6>
            <h5 className="card-text">1.000.000 VND</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCardComponent;
