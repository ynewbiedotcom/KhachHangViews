import { useParams } from "react-router-dom";
import ImageProduct from "./ImageProduct";
import InforProduct from "./InforProduct";

import Container from "react-bootstrap/Container";
import "./style.css";
const DetailProduct = (props) => {
  const { id } = useParams();
  return (
    <>
      <p>{id}</p>
      <Container fluid className="row mb-5">
        <div className="col-6">
          {" "}
          <ImageProduct></ImageProduct>
        </div>
        <div className="col-6 ">
          {" "}
          <InforProduct id={id}></InforProduct>
        </div>
      </Container>
    </>
  );
};
export default DetailProduct;
