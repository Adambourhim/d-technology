import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Images/DSI.svg";
import styles from "./navbar.module.css";
function Header() {
  return (
    <div className={styles.headBar}>
      <Navbar collapseOnSelect expand="lg" bg="white" text="dark">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <div className={styles.box1}>
            <Nav className="mr-auto">
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">Product</Nav.Link>
              <Nav.Link href="#pricing">Technology</Nav.Link>
              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Client" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">Partner</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
