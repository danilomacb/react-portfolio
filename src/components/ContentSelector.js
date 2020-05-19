import React from "react";
import { Container, Row } from "react-bootstrap";

import MyCard from "./MyCard";
import infos from "../infos.json";

function ContentSelector({ match }) {
  return (
    <Container className="my-5">
      <Row>
        {match.path === "/projetos" ? (
          <>
            {infos.projects.map((project) => (
              <MyCard key={project.name} content={project} />
            ))}
          </>
        ) : null}

        {match.path === "/artigos" ? (
          <>
            {infos.articles.map((article) => (
              <MyCard key={article.name} content={article} />
            ))}
          </>
        ) : null}

        {match.path === "/certificados" ? (
          <>
            {infos.certificates.map((certificate) => (
              <MyCard key={certificate.name} content={certificate} />
            ))}
          </>
        ) : null}
      </Row>
    </Container>
  );
}

export default ContentSelector;
