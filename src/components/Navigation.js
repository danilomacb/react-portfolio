import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar variant="dark" expand="sm" id="my-navbar">
      <Navbar.Toggle aria-controls="navigation" />
      <Navbar.Collapse id="navigation">
        <Nav className="mr-auto">
          <Nav.Link href="/">Sobre</Nav.Link>
          <Nav.Link href="/projetos">Projetos</Nav.Link>
          <Nav.Link href="/artigos">Artigos</Nav.Link>
          <Nav.Link href="/certificados">Certificados</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
