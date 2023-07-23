const Slider = () => {
  return (
    <>
      <div className="col-7 content-left">
        <div className="mb-3">
          <img
            src="/imgs/shoe-banner (1).jpg"
            className="anh-to w-100"
            id="product-image"
            alt="ảnh sản phẩm"
          />
        </div>
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (2).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (2).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (5).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (5).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (4).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (4).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (6).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (6).jpg')"
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (2).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (2).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (5).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (5).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (4).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (4).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (6).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (6).jpg')"
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (2).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (2).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (5).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (5).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (4).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (4).jpg')"
                    alt="First slide"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/imgs/shoe-banner (6).jpg"
                    height="140px"
                    onClick="changeProductImage('/imgs/shoe-banner (6).jpg')"
                    alt="First slide"
                  />
                </div>
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
            <span className="visually-hidden">Trang Trước</span>
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
            <span className="visually-hidden">Trang Sau</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
