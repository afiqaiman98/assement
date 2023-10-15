import { Col, Row } from "react-bootstrap";
import dataProducts from "../data/product.json";
import { DataProduct } from "../components/DataProduct";

export function Listing() {
  return (
    <>
      <h1>Product Listing</h1>
      <Row>
        {dataProducts.map((item) => (
          <Col key={item.id}>
            <DataProduct {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}



