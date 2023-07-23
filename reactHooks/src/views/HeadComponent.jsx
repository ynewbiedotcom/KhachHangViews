import { useEffect } from "react";
import "./styles/HeadComponent.scss";

const HeadComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax3 = document.getElementById("navbarhead");
      const scrolled = window.scrollY;

      parallax3.style.top = `-${scrolled * 0.2}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-0 py-4 fixed-top"
          id="navbarhead"
        >
          <div className="container">
            <div className="d-flex justify-content-between align-items-center w-100">
              <a
                className="navbar-brand d-flex align-items-center"
                href="index.html"
              >
                <span className="text-uppercase fw-lighter ms-2">LOGO</span>
              </a>
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navMenu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navMenu"
            >
              <ul className="navbar-nav mx-auto text-center">
                <li className="nav-item px-2 py-2">
                  <a
                    className="nav-link text-uppercase"
                    href="/khach-hang/home"
                  >
                    TRANG CHỦ
                  </a>
                </li>
                <li className="nav-item px-2 py-2">
                  <a
                    className="nav-link text-uppercase"
                    href="/khach-hang/products"
                  >
                    SẢN PHẨM
                  </a>
                </li>
                <li className="nav-item px-2 py-2">
                  <a className="nav-link text-uppercase" href="#div6">
                    KHÁM PHÁ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="position-relative">
          <div className="position-fixed bottom-0 end-0 me-3  box1">
            <div className="btn-group dropstart">
              <button
                type="button"
                className="btn btn-info"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bx bxs-user-circle"></i>
                <span className="cart-count">4</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="triggerId"
              >
                <a className="dropdown-item" href="#">
                  <i className="bx bxs-user"></i> Hồ sơ
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bxs-cog"></i> Cài đặt
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-history"></i> Lịch sử
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bxs-bell"></i> Thông báo
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bxs-food-menu"></i> Danh Sách đơn hàng
                </a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-log-out"></i> Đăng xuất
                </a>
              </div>
            </div>
          </div>

          <div className="position-fixed bottom-0 end-0 me-3  box2">
            <div className="btn-group dropstart">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bx bxs-shopping-bag"></i>
                <span className="cart-count">4</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-start"
                aria-labelledby="triggerId"
              >
                <a className="dropdown-item" href="#">
                  Sản phẩm 1 x3
                </a>
                <a className="dropdown-item" href="#">
                  sản phẩm 2 x2
                </a>
                <a className="dropdown-item" href="#">
                  sản phẩm 3 x2
                </a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  thanh toán
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeadComponent;
