import React from "react";
import { Container, Row } from "react-bootstrap";

import MyCard from "../components/MyCard";
import infos from "../infos.json";

function Articles() {
  return (
    <Container className="my-5">
      <h1 className="text-center">Artigos</h1>
      <Row>
        {infos.articles.map((article) => (
          <MyCard key={article.name} content={article} />
        ))}
      </Row>
    </Container>
  );
}

export default Articles;
