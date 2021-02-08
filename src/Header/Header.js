import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Images/DSI.svg";
import styles from "./navbar.module.css";
import union from "../Images/Union.svg";
import mail from "../Images/mail.svg";
import media from "../Images/shuffle.svg";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      text="dark"
      className={styles.navHead}
    >
      <div className={styles.logo}>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
      </div>
      <div className={styles.list}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className={styles.icon}>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
