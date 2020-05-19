import React from "react";
import { Container, Row } from "react-bootstrap";

import MyCard from "./MyCard";
import infos from "../infos.json";

function Projects() {
  return (
    <Container className="my-5">
      <Row>
        {infos.projects.map((project) => (
          <MyCard key={project.name} content={project} />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
