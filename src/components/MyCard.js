import React from "react";
import { Col, Card } from "react-bootstrap";

function MyCard({ content }) {
  return (
    <Col sm="12" md="6" lg="4" className="my-3">
      <Card bg="dark" text="light">
        <Card.Img src={process.env.PUBLIC_URL + "/images/" + content.img} />
        <Card.Body>
          <Card.Title className="text-center">{content.name}</Card.Title>
          {content.technologies ? (
            <>
              <p className="my-card-description">Tecnologias:</p> {content.technologies}
            </>
          ) : null}
          {content.description ? <p>{content.description}</p> : null}
          {content.date ? (
            <>
              <p className="my-card-description">Data de Emissão:</p>
              {content.date} <br />
            </>
          ) : null}
          {content.code ? (
            <>
              <p className="my-card-description">Código de Validação:</p>
              {content.code} <br />
            </>
          ) : null}
          {content.link ? (
            <>
              <p className="my-card-description">Link:</p>
              <a href={content.link} target="blank">
                {content.link}
              </a>
            </>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MyCard;
