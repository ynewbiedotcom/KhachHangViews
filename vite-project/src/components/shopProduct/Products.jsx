import React, { useState, useEffect } from "react";
import "./style.css";

const Products = () => {
  return (
    <>
      <div className="col-4 mt-2">
        <div className="card text-start ">
          <div className="position-relative">
            <img
              className="card-img-top"
              src="https://ananas.vn/wp-content/uploads/Pro_A6T012_2-500x500.jpg"
              alt="Title"
            />
            <div className="position-absolute top-0 end-0 mt-1 me-1">
              <button className="badge bg-danger">Hết Hàng !</button>
            </div>

            <div className="position-absolute bottom-0 end-0 mb-1 me-0">
              <a className="btn favorite-button">
                <i className="fa-solid fa-heart fs-2" title="Yêu thích"></i>
              </a>
            </div>

            <div className="position-absolute bottom-0 start-0 mb-1 ms-1 shopBtn">
              <a href={"/product/" + 3} className="btn btn-success ">
                Mua Ngay!
              </a>
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

export default Products;
