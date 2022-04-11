import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = (props) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" >
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            props.gambar
          }
        />
        <Card.Body>
          <Card.Title>{props.nama} <strong>({props.kode})</strong></Card.Title>
          <Card.Text>Rp. {numberWithCommas(props.harga)}</Card.Text>
          <Button
          onClick={() => 
          props.delete(props.id)
          }
          >Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
