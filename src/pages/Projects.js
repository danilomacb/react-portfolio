import React from "react";
import { Container, Row } from "react-bootstrap";

import MyCard from "../components/MyCard";
import infos from "../infos.json";

function Projects() {
  return (
    <Container className="my-5">
      <h1 className="text-center">Projetos</h1>
      <Row>
        {infos.projects.map((project) => (
          <MyCard key={project.name} content={project} />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
