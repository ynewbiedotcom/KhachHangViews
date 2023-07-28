import React, { useState } from "react";
import { useCartContext } from "../../CartContext";
import ProductData from "./ProductData";
import Accordion from "react-bootstrap/Accordion";

const InforProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(ProductData.mauSac[0]);
  const [selectedSize, setSelectedSize] = useState(
    ProductData.mauSac[0].kichThuoc[0]
  );

  const { dispatch } = useCartContext();

  const handleAddToCart = () => {
    // Lấy thông tin sản phẩm từ ProductData
    const product = ProductData;

    // Tạo đối tượng sản phẩm mới để thêm vào giỏ hàng
    const newCartItem = {
      id: product.maSP, // Sử dụng mã sản phẩm làm id của sản phẩm trong giỏ hàng
      ten: product.ten,
      gia: product.gia,
      color: selectedColor.value,
      size: selectedSize.value,
      quantity: quantity,
    };
    console.log("checkk", newCartItem);
    // Gọi hàm dispatch từ Context API để thêm sản phẩm vào giỏ hàng
    dispatch({ type: "ADD_TO_CART", payload: newCartItem });

    // Hiển thị thông báo hoặc chuyển hướng đến trang giỏ hàng (tuỳ ý)
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedSize(color.kichThuoc[0]); // Chọn kích thước mặc định của màu sắc đang chọn
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (quantity) => {
    setQuantity(quantity.target.value);
  };

  return (
    <>
      <div className="content-right mt-5">
        <h1>
          <strong>{ProductData.ten}</strong>
        </h1>
        <div className="row">
          <div className="col-6">
            <span>Mã sản phẩm: {ProductData.maSP}</span>
          </div>
          <div className="col-6">
            <span>Tình trạng: {ProductData.tinhTrang}</span>
          </div>
          <div className="col-6">
            <span>Hãng: {ProductData.hang}</span>
          </div>
          <div className="col-6">
            <span>Dòng: {ProductData.dong}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <br />
            <h3>
              <strong style={{ color: "orange" }}>{ProductData.gia} VND</strong>
            </h3>
          </div>
        </div>
        <hr className="dashed-hr" />
        <span>{ProductData.moTa}</span>
        <hr className="dashed-hr" />
        <div className="row">
          {ProductData.mauSac.map((item, index) => {
            return (
              <div className="col-1 ms-1 mb-3" key={item.idMauSac}>
                <a onClick={() => handleColorChange(item)}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: item.value,
                    }}
                  ></div>
                </a>
              </div>
            );
          })}
        </div>
        <hr className="dashed-hr" />
        <div className="row">
          <div className="col-6">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong className="font-monospace">Kích Thước</strong>
                </Accordion.Header>
                <Accordion.Body className=" row">
                  {selectedColor.kichThuoc.map((item, index) => {
                    return (
                      <div
                        className={`col-3 mb-3 ${
                          item === selectedSize ? "selected-size" : ""
                        }`}
                        key={item.idKichThuoc}
                      >
                        <a
                          href="#"
                          className="btn btn-sm btn-outline-dark"
                          onClick={() => handleSizeChange(item)}
                        >
                          <div>{item.value}</div>
                        </a>
                      </div>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3 border-0">
              <input
                type="number"
                min="0"
                max={ProductData.conLai}
                className="form-control"
                name="formId1"
                id="formId1"
                placeholder="Số Lượng"
                onChange={(e) => handleQuantityChange(e)}
              />
              <label htmlFor="formId1" className="font-monospace">
                <strong>Số Lượng :</strong>
              </label>
            </div>
          </div>
        </div>
        <hr className="dashed-hr" />
        <div className="row">
          <div className="col-10">
            <button
              className="btn btn-success btn-lg w-100"
              onClick={handleAddToCart}
            >
              <strong>THÊM VÀO GIỎ HÀNG</strong>
            </button>
          </div>
          <div className="col-2">
            <a
              className="btn favorite-button"
              title="Yêu  thích"
              data-product-id="1"
            >
              <i className="fa-regular fa-heart fs-5"></i>
            </a>
          </div>
          <div className="col-12 mt-2">
            <a href="#" className="btn btn-warning btn-lg w-100">
              <strong>THANH TOÁN</strong>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InforProduct;
