import { BsCircleHalf } from "@react-icons/all-files/bs/BsCircleHalf";

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



function Header() {

  const [isActive, setIsActive] = useState(false);
  const handleOnClick = ()=>{
    setIsActive(current => !current);
    // console.log(setIsActive)
  }

  return (
    <div>
      <Navbar expand="lg"  className={isActive? 'darkNav p-4 mb-4' : 'p-4 headerNav mb-4'} sticky="top" >
        <Container>
          <Navbar.Brand href="/"><h4>My Portfolio</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto headerNav ">
              <Nav.Link className="nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="nav-link" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="nav-link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <label htmlFor="darkMode">
              <BsCircleHalf className="dark-mode-toggle" onClick={handleOnClick} />
            </label>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default Header;
