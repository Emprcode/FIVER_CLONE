import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container className="p-3">
        <Navbar.Brand href="#home">Fiverr.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Fiverr Business</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <Nav.Link href="#link">English</Nav.Link>
            <Nav.Link href="#link">Become a seller</Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
            <Button variant="none" className="btn-outline-success">
              join
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
