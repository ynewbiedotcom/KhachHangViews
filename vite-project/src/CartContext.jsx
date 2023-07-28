import React, { createContext, useContext, useReducer, useEffect } from "react";

// Khởi tạo Context
const CartContext = createContext();

// Hàm Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cartItems: changeQuantity(state.cartItems, action.payload),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload),
      };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        favorites: toggleFavorite(state.favorites, action.payload),
      };
    default:
      return state;
  }
};

// Hàm thêm sản phẩm vào giỏ hàng
const addToCart = (cartItems, newItem) => {
  const existingItemIndex = cartItems.findIndex(
    (item) => item.id === newItem.id
  );

  if (existingItemIndex !== -1) {
    // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng sản phẩm
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].quantity += 1;
    return updatedCartItems;
  } else {
    // Sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

// Hàm thay đổi số lượng sản phẩm trong giỏ hàng
const changeQuantity = (cartItems, { id, changeType }) => {
  return cartItems.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity:
          changeType === "increase" ? item.quantity + 1 : item.quantity - 1,
      };
    }
    return item;
  });
};

// Hàm xóa sản phẩm khỏi giỏ hàng
const removeFromCart = (cartItems, itemId) => {
  return cartItems.filter((item) => item.id !== itemId);
};

// Hàm thay đổi trạng thái yêu thích
const toggleFavorite = (favorites, itemId) => {
  if (favorites.includes(itemId)) {
    // Nếu sản phẩm đã được yêu thích, loại bỏ khỏi danh sách yêu thích
    return favorites.filter((item) => item !== itemId);
  } else {
    // Nếu sản phẩm chưa được yêu thích, thêm vào danh sách yêu thích
    return [...favorites, itemId];
  }
};

// Hàm tạo Context Provider
const CartProvider = ({ children }) => {
  // Khởi tạo giá trị ban đầu cho Context
  const initialState = {
    cartItems: [],
    favorites: [],
  };

  // Sử dụng useReducer để quản lý trạng thái của Context
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Lưu trạng thái vào localStorage khi có thay đổi
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.cartItems, state.favorites]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hàm sử dụng Context
const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
