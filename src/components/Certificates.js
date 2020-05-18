import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Certificates() {
  return (
    <Container className="my-5">
      <Row>
        <Col sm="12" md="6" lg="4">
          <Card bg="dark" text="light">
            <Card.Img src={process.env.PUBLIC_URL + "/images/certificates/Html5ECss3-B7web.jpg"} />
            <Card.Body>
              <Card.Title className="text-center">HTML5 e CSS3 - B7Web</Card.Title>
              <Card.Text>
                <p className="my-card-description">Data de Emissão:</p> 26/02/2019 <br />
                <p className="my-card-description">Código de Validação:</p> 00009717 <br />
                <p className="my-card-description">Validar:</p> https://b7web.com.br/certificado/
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Certificates;
