import React from "react";
import { Navbar, Container, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth/auth";


const NavbarComponent = () => {
  const auth = useAuth()
  const history = useHistory()

  const handleLogout = () => {
    auth.logout()
    history.push("/")
  }

  return (
    <Navbar variant="light" expand="lg">
      <Container>
        <Navbar.Brand ><strong>Majestic</strong> Banyuwangi</Navbar.Brand>
      </Container>
      {
        auth.user && 
          <Button className="btn btn-danger"
            onClick={handleLogout}>Keluar</Button>
        
      }
    </Navbar>
  );
};

export default NavbarComponent;
