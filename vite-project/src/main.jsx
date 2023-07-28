import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./pages/Pages.jsx";
import UserPage from "./components/accountUser/UserPage.jsx";
import Cart from "./common/Cart/Cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import DetailProduct from "./components/detailProduct/DetailProduct.jsx";
import { CartProvider } from "./CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Pages />,
      },

      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
