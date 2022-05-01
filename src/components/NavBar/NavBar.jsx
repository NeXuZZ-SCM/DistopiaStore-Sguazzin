//#region Imports
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
//#endregion

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">DistopiaStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          { /* ------------------------------ PrimerSubMenu ----------------------------- */}
          <Nav className="me-auto">
            <Nav.Link href="#features">Menu1</Nav.Link>
            <Nav.Link href="#pricing">Menu2</Nav.Link>
            <NavDropdown title="Opciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Opción1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Opción2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Opción3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          { /* ------------------------------ SegundoSubMenu ----------------------------- */}
          <Nav>
            <Nav.Link href="#deets">Menu3</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Menu4</Nav.Link>
            <Nav.Link href="#Carrito">
              <CartWidget Count={3}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

