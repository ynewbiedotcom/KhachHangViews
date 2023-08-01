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
        <img className="w-100" src="https://file.hstatic.net/1000230642/collection/3_da9a91027cd0488581c18e767bd6e453_master.jpg" alt="banner" />
        <div className=" d-flex ps-5 pt-5 mt-5">
          <i className="fa fa-bolt fs-1"></i>
          <h1> Flash Delas</h1>
        </div>
        <FlashDeals />
        <br />
        <Shop></Shop>
        <br />
        <Annocument />
        <br />
        <Wrapper />
      </div>
    </>
  );
};

export default Pages;
