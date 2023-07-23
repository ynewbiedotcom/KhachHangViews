import ProductCardComponent from "../ProductCard/ProductCardComponent";
import "./Product.scss";
const Products = () => {
  return (
    <>
      <main>
        <div className="content trang2" id="div1">
          <div className="row container">
            <div className="col-3 content-left">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item border-0 ">
                  <h1 className="accordion-header " id="headingOne">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <strong className="font-monospace">TRẠNG THÁI</strong>
                    </button>
                  </h1>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Đang Bán</li>
                        <li className="list-group-item">Đang Giảm Giá</li>
                        <li className="list-group-item">Hết Hàng</li>
                        <li className="list-group-item">Sắp Về</li>
                        <li className="list-group-item">Sắp Hết Hàng</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="accordion" id="accordionExample1">
                <div className="accordion-item border-0 ">
                  <h1 className="accordion-header " id="headingOne1">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne1"
                      aria-expanded="true"
                      aria-controls="collapseOne1"
                    >
                      <strong className="font-monospace">HÃNG</strong>
                    </button>
                  </h1>
                  <div
                    id="collapseOne1"
                    className="accordion-collapse collapse show "
                    aria-labelledby="headingOne1"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Nai Kì</li>
                        <li className="list-group-item">A Di Đát</li>
                        <li className="list-group-item">Ba Lan Xi A Ga </li>
                        <li className="list-group-item">APPLE</li>
                        <li className="list-group-item">SAMSUNG</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="accordion" id="accordionExample2">
                <div className="accordion-item border-0 ">
                  <h1 className="accordion-header " id="headingOne2">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne2"
                      aria-expanded="true"
                      aria-controls="collapseOne2"
                    >
                      <strong className="font-monospace">GIÁ</strong>
                    </button>
                  </h1>
                  <div
                    id="collapseOne2"
                    className="accordion-collapse collapse show "
                    aria-labelledby="headingOne2"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">0 - 500 </li>
                        <li className="list-group-item">500 - 1000</li>
                        <li className="list-group-item">1000 - 2000</li>
                        <li className="list-group-item">2000 - 9999</li>
                        <li className="list-group-item">free</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="accordion" id="accordionExample3">
                <div className="accordion-item border-0 ">
                  <h1 className="accordion-header " id="headingOne3">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne3"
                      aria-expanded="true"
                      aria-controls="collapseOne3"
                    >
                      <strong className="font-monospace">MÀU SẮC</strong>
                    </button>
                  </h1>
                  <div
                    id="collapseOne3"
                    className="accordion-collapse collapse show "
                    aria-labelledby="headingOne3"
                    data-bs-parent="#accordionExample3"
                  >
                    <div className="accordion-body row">
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                      <div className="col-3 mb-3">
                        <button className="btn color-pick"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
            </div>
            <div className="col-9 content-right">
              <div className="row container mt-5 mb-5">
                <div
                  id="carouselId"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img
                        src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg"
                        className="w-100 d-block"
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h3>Title</h3>
                        <p>Description</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg"
                        className="w-100 d-block"
                        alt="Second slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h3>Title</h3>
                        <p>Description</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg"
                        className="w-100 d-block"
                        alt="Third slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h3>Title</h3>
                        <p>Description</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="row" id="div2">
                <div className="col-6">
                  <h1 className="font-monospace fw-bolder">
                    <strong>DANH SÁCH SẢN PHẨM</strong>
                  </h1>
                </div>
                <div className="col-6">
                  <form action="#">
                    <div className="input-group mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInputGroup1"
                          placeholder="Username"
                        />
                        <label htmlFor="floatingInputGroup1">Tìm Kiếm</label>
                      </div>
                      <span className="input-group-text">
                        <i className="bx bx-search"></i>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <hr />
              <div className="row">
                <ProductCardComponent></ProductCardComponent>
              </div>

              <div className="d-flex justify-content-center  pt-5">
                <nav aria-label="Page navigation ">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#div2">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#div2">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#div2">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Products;
