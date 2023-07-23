import React, { useEffect, useState } from "react";

const FavoriteButtonComponent = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái yêu thích từ LocalStorage khi Component được chạy
    const isProductFavorite = localStorage.getItem(productId) === "true";
    setIsFavorite(isProductFavorite);
  }, [productId]);

  const handleFavoriteToggle = () => {
    // Cập nhật trạng thái yêu thích và lưu vào LocalStorage
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    localStorage.setItem(productId, !isFavorite);
  };

  return (
    <>
      <div className="position-absolute bottom-0 end-0 mb-1 me-0">
        <a className="btn favorite-button" onClick={handleFavoriteToggle}>
          {isFavorite ? (
            <i className="bx bxs-heart fs-2" title="Đã yêu thích"></i>
          ) : (
            <i className="bx bx-heart fs-2" title="Yêu thích"></i>
          )}
        </a>
      </div>
    </>
  );
};

export default FavoriteButtonComponent;
