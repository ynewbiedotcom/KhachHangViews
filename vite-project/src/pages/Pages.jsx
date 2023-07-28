import React from "react";
import Home from "../components/MainPage/Home";
import Shop from "../components/shops/Shop";
import Wrapper from "../components/wrapper/Wrapper";
import Annocument from "../components/annocument/Annocument";
import FlashDeals from "../components/flashDeals/FlashDeals";
const Pages = () => {
  return (
    <>
      <div className="mb-5" style={{ minHeight: "150vh" }}>
        <Home />

        <Shop />
        <Annocument />
        <Wrapper />
      </div>
    </>
  );
};

export default Pages;
