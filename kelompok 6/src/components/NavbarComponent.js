import React from "react";
import {Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
      <Navbar.Brand><strong>Majestic</strong> Banyuwangi</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
