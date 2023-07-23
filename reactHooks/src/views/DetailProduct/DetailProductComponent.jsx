import ColorDetailComponent from "./ColorDetailComponent";
import SizeComponent from "./SizeDetail";

const DetailProduct = () => {
  return (
    <>
      <main>
        <div className="content trang2" id="div1">
          <div className="row container">
            <div className="col-5 content-right">
              <h1>
                <span>GIÀY BÁN</span>
              </h1>
              <div className="row">
                <div className="col-6">
                  <span>Mã sản phẩm: *0998s</span>
                </div>
                <div className="col-6">
                  <span>Tình trạng: Như Vừa Rời Xưởng</span>
                </div>
                <div className="col-6">
                  <span>Hãng: Bán CaS</span>
                </div>
                <div className="col-6">
                  <span>Dòng: Như Vừa Rời Xưởng</span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <br />
                  <h3>
                    <span className="text-danger">124.121.000 VND</span>
                  </h3>
                </div>
              </div>
              <hr className="dashed-hr" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                atque alias molestias dicta reiciendis. Tenetur atque in
                necessitatibus dolore voluptatibus! Assumenda quos pariatur a
                nemo similique itaque quasi doloribus repellendus.
              </span>
              <hr className="dashed-hr" />
              <div className="row">
                <ColorDetailComponent></ColorDetailComponent>
              </div>

              <hr className="dashed-hr" />
              <div className="row">
                <div className="col-6">
                  <div className="accordion" id="accordionExample3">
                    <div className="accordion-item">
                      <h1 className="accordion-header" id="headingOne3">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne3"
                          aria-expanded="true"
                          aria-controls="collapseOne3"
                        >
                          <span className="font-monospace">Kích Thước</span>
                        </button>
                      </h1>
                      <div
                        id="collapseOne3"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne3"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body row">
                          <SizeComponent></SizeComponent>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-floating mb-3 border-0">
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="Số Lượng"
                    />
                    <label htmlFor="formId1" className="font-monospace">
                      <span>Số Lượng :</span>
                    </label>
                  </div>
                </div>
              </div>

              <hr className="dashed-hr" />
              <div className="row">
                <div className="col-10">
                  <a href="#" className="btn btn-success btn-lg w-100">
                    <span>THÊM VÀO GIỎ HÀNG</span>
                  </a>
                </div>
                <div className="col-2">
                  <a
                    className="btn favorite-button"
                    title="Yêu  thích"
                    data-product-id="1"
                  >
                    <i className="bx bx-heart fs-2" title="Yêu thích"></i>
                  </a>
                </div>
                <div className="col-12 mt-2">
                  <a href="#" className="btn btn-warning btn-lg w-100">
                    <span>THANH TOÁN</span>
                  </a>
                </div>
              </div>
            </div>

            <hr className="dashed-hr mt-5" />
            <h1 className="text-center">SẢN PHẨM LIÊN QUAN</h1>
            <div className="row mb-5">
              <div className="col-3 mt-4">
                <div className="card text-start">
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"
                      alt="Title"
                    />
                    <div className="position-absolute top-0 end-0 mt-1 me-1">
                      <button className="badge bg-danger">Mới !</button>
                    </div>

                    <div className="position-absolute bottom-0 end-0 mb-1 me-0">
                      <a className="btn favorite-button" data-product-id="1">
                        <i className="bx bx-heart fs-2" title="Yêu thích"></i>
                      </a>
                    </div>

                    <div className="position-absolute bottom-0 start-0 mb-1 ms-1 shopBtn">
                      <button className="btn btn-success">Mua Ngay!</button>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <span>Tên Sản Phẩm</span>
                    </h4>
                    <h6 className="card-text">Hãng - Dòng</h6>
                    <h5 className="card-text">1.000.000 VND</h5>
                  </div>
                </div>
              </div>

              <div className="col-3 mt-4">
                <div className="card text-start">
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg"
                      alt="Title"
                    />
                    <div className="position-absolute top-0 end-0 mt-1 me-1">
                      <button className="badge bg-danger">Mới !</button>
                    </div>

                    <div className="position-absolute bottom-0 end-0 mb-1 me-0">
                      <a className="btn favorite-button" data-product-id="2">
                        <i className="bx bx-heart fs-2" title="Yêu thích"></i>
                      </a>
                    </div>

                    <div className="position-absolute bottom-0 start-0 mb-1 ms-1 shopBtn">
                      <button className="btn btn-success">Mua Ngay!</button>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <span>Tên Sản Phẩm</span>
                    </h4>
                    <h6 className="card-text">Hãng - Dòng</h6>
                    <h5 className="card-text">1.000.000 VND</h5>
                  </div>
                </div>
              </div>

              <div className="col-3 mt-4">
                <div className="card text-start">
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"
                      alt="Title"
                    />
                    <div className="position-absolute top-0 end-0 mt-1 me-1">
                      <button className="badge bg-danger">Cũ !</button>
                    </div>

                    <div className="position-absolute bottom-0 end-0 mb-1 me-0">
                      <a className="btn favorite-button" data-product-id="3">
                        <i className="bx bx-heart fs-2" title="Yêu thích"></i>
                      </a>
                    </div>

                    <div className="position-absolute bottom-0 start-0 mb-1 ms-1 shopBtn">
                      <button className="btn btn-success">Mua Ngay!</button>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <span>Tên Sản Phẩm</span>
                    </h4>
                    <h6 className="card-text">Hãng - Dòng</h6>
                    <h5 className="card-text">1.000.000 VND</h5>
                  </div>
                </div>
              </div>

              <div className="col-3 mt-4">
                <div className="card text-start">
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
                      <a className="btn favorite-button" data-product-id="4">
                        <i className="bx bx-heart fs-2" title="Yêu thích"></i>
                      </a>
                    </div>

                    <div className="position-absolute bottom-0 start-0 mb-1 ms-1 shopBtn">
                      <button className="btn btn-success">Mua Ngay!</button>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <span>Tên Sản Phẩm</span>
                    </h4>
                    <h6 className="card-text">Hãng - Dòng</h6>
                    <h5 className="card-text">1.000.000 VND</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailProduct;
