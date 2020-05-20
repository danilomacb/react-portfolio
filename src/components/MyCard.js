import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import Lightbox from "react-image-lightbox";

function MyCard({ content }) {
  const [expandImage, setExpandImage] = useState(false);

  return (
    <>
      {expandImage ? (
        <Lightbox mainSrc={"/images/" + content.img} onCloseRequest={() => setExpandImage(false)} />
      ) : null}

      <Col sm="12" md="6" lg="4" className="my-3">
        <Card bg="dark" text="light">
          <Card.Img
            src={process.env.PUBLIC_URL + "/images/" + content.img}
            className="my-card-img"
            onClick={() => {
              setExpandImage(true);
            }}
          />
          <Card.Body>
            <Card.Title className="text-center">{content.name}</Card.Title>
            {content.technologies ? (
              <>
                <p className="my-card-description">Tecnologias:</p> {content.technologies}
                <br />
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
    </>
  );
}

export default MyCard;
