import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink as NavLink1,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div style={{ fontSize: "1.3rem" }}>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand to="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto mr-2" navbar>
            <NavItem>
              <NavLink1
                className="nav-link"
                href="https://github.com/brigadierpratap"
              >
                <span className="fa fa-github fa-lg"></span>
              </NavLink1>
            </NavItem>
            <NavItem>
              <NavLink1
                className="nav-link"
                href="https://www.linkedin.com/in/pawan-singh-4b3b8618b/"
              >
                <span className="fa fa-linkedin fa-lg"></span>
              </NavLink1>
            </NavItem>
            <NavItem>
              <NavLink1
                className="nav-link"
                href="https://www.instagram.com/brigadier_pratap"
              >
                <span className="fa fa-instagram fa-lg"></span>
              </NavLink1>
            </NavItem>
            <NavItem>
              <NavLink1
                className="nav-link"
                href="mailto:pawans.ug19.ec@nitp.ac.in"
              >
                <span className="fa fa-envelope fa-lg"></span>
              </NavLink1>
            </NavItem>
            <NavItem>
              <NavLink1
                className="nav-link"
                href="https://www.twitter.com/iampks99"
              >
                <span className="fa fa-twitter fa-lg"></span>
              </NavLink1>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
