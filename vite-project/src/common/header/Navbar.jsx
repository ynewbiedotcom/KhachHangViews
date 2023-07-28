import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavbarMenu = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <Container className="header">
        <div className=" row ">
          <div className="catgrories col-6">
            {" "}
            <h3>Ở đây sẽ có 1 slider chạy qua nhưng chỉ có chữ </h3>
          </div>

          <div className="col-6 d-flex flex-row-reverse">
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

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NavbarMenu;
