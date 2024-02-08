import { BsCircleHalf } from "@react-icons/all-files/bs/BsCircleHalf";

import React, { useEffect, useState } from "react";
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

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <Navbar expand="lg"  className={isActive? 'darkNav p-4 mb-4' : 'p-4 headerNav mb-4'} > */}
      <Navbar expand="lg"  className={ isFixed ? 'fixed-top p-3 headerNav' : isActive ?  'darkNav' : 'headerNav'} >
        <Container>
          <Navbar.Brand href="/"><h4>My Portfolio</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto headerNav ">
              <Nav.Link className="nav-link nav-pad" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link nav-pad" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="nav-link nav-pad" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="nav-link nav-pad" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link nav-pad" href="#contact">
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
