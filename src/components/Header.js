import React from "react";
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Container  } from 'react-bootstrap';
import '../index.css';
import Background from "./Background";
import Backgrounddiv from "./Backgrounddiv";

const Header =() =>{
    return (
        <div>
        <Navbar bg="white" variant="black" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#"><img src='./images/hobot.jpg' className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="collapsibleNavbar" />
        <Navbar.Collapse id="collapsibleNavbar">
          <Nav className="ms-auto">
            <Nav.Link href="#">FindSuppliers</Nav.Link>
            <NavDropdown title="Find Service Tags" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Link</NavDropdown.Item>
              <NavDropdown.Item href="#">Another link</NavDropdown.Item>
              <NavDropdown.Item href="#">A third link</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-primary">Login/Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    <Background />
    <Backgrounddiv />
     
      </div>
    )

}
export default Header;