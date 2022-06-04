//#region Imports
import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CustomProvider/CustomProvider';

//#endregion

export default function NavBar() {
  const {carrito} = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate(`/`)}>DistopiaStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          { /* ------------------------------ PrimerSubMenu ----------------------------- */}
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate(`/category/1`)}>Seguridad</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(`/category/2`)}>Entretenimiento</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(`/category/3`)}>Outfit</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Proximamente</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          { /* ------------------------------ SegundoSubMenu ----------------------------- */}
          <Nav>
            <Nav.Link href="#Carrito">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

