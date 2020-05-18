import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="navigation" />
      <Navbar.Collapse id="navigation">
        <Nav className="mr-auto">
          <Nav.Link href="/">Sobre</Nav.Link>
          <Nav.Link href="/">Projetos</Nav.Link>
          <Nav.Link href="/">Artigos</Nav.Link>
          <Nav.Link href="/">Certificados</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
