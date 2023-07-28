import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
const Catg = () => {
  const data = [
    {
      cateName: "Hãng",
    },
    {
      cateName: "Dòng",
    },
    {
      cateName: "Giá",
    },
    {
      cateName: "Thượng Đình",
    },
    {
      cateName: "Nike",
    },
    {
      cateName: "Drink",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Bộ lọc </h1>
          <h1>100k - 500k </h1>
        </div>
        <Accordion className="">
          {data.map((value, index) => {
            return (
              <Accordion.Item eventKey={index} className="box" key={index}>
                <Accordion.Header>{value.cateName}</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>option 1</li>
                    <li>option 1</li>
                    <li>option 1</li>
                    <li>option 1</li>
                    <li>option 1</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
