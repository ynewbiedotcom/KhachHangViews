import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Ở",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Đây",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Là",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "MỘT",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "CÁI",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "GÌ ",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "ĐÓ",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Hoặc",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "GÌ",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Đây",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Giày",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
