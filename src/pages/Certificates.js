import React from "react";
import { Container, Row } from "react-bootstrap";

import MyCard from "../components/MyCard";
import infos from "../infos.json";

function Certificates() {
  return (
    <Container className="my-5">
      <Row>
        {infos.certificates.map((certificate) => (
          <MyCard key={certificate.name} content={certificate} />
        ))}
      </Row>
    </Container>
  );
}

export default Certificates;
