import React, { useState } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavbarMenu = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <Container className="header">
        <div className="row">
          <div className="catgrories col-6">
            {" "}
            <Slider {...settings}>
              <div>
                <h3 className="text-center text-danger">
                  Chào mừng bạn đã đến với shop của Việt
                </h3>
              </div>
              <div>
                <h3 className="text-center">
                  Mọi thứ ở đây đều miễn phí miễn là bạn trả tiền
                </h3>
              </div>
              <div>
                <h3 className="text-center">Hãy cười thật nhiều bạn nhé</h3>
              </div>
              <div>
                <h3 className="text-center">
                  Đề phòng trường hợp bạn chưa có ai yêu
                </h3>
              </div>
              <div>
                <h3 className="text-center">Thì tôi có người yêu rồi nhé</h3>
              </div>
              <div>
                <h3 className="text-center">Cảm ơn bạn đã ghé thăm</h3>
              </div>
            </Slider>
          </div>

          <div className="col-6 d-flex flex-row-reverse ">
            <Navbar data-bs-theme="light">
              <Container>
                <Nav className="me-auto">
                  <Nav.Link href="/">Trang chủ</Nav.Link>
                  <Nav.Link href="/story">Câu chuyện</Nav.Link>
                  <Nav.Link href="/user">Tài khoản</Nav.Link>
                  <Nav.Link href="/track">Theo dõi đơn hàng</Nav.Link>
                  <Nav.Link href="/contact">Liên hệ</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NavbarMenu;
