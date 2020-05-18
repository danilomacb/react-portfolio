import React from "react";
import { Col, Card } from "react-bootstrap";

function MyCard({ certificate }) {
  return (
    <Col sm="12" md="6" lg="4" className="my-3">
      <Card bg="dark" text="light">
        <Card.Img src={process.env.PUBLIC_URL + "/images/certificates/" + certificate.img} />
        <Card.Body>
          <Card.Title className="text-center">{certificate.name}</Card.Title>
          <p className="my-card-description">Data de Emissão:</p>
          {certificate.date} <br />
          <p className="my-card-description">Código de Validação:</p>
          {certificate.code} <br />
          <p className="my-card-description">Validar:</p>
          <a href={certificate.link} target="blank">
            {certificate.link}
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MyCard;
