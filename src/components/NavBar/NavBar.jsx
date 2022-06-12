import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate(`/`)}>DistopiaStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          { /* ------------------------------ PrimerSubMenu ----------------------------- */}
          <Nav className="me-auto">
            <NavDropdown title="Productos de asistencia" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate(`/category/1`)}>Seguridad</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(`/category/2`)}>Limpieza</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(`/category/3`)}>Outfit</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Proximamente</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          { /* ------------------------------ SegundoSubMenu ----------------------------- */}
          <Nav>
            <Nav.Link onClick={() => navigate(`/cart`)}>
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

