import React from "react";
import Layout from "./Layout";
import { Button, Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import user1Img from "../assets/img/me.jpg";
import { motion } from "framer-motion"

function Hero() {
  
  return (
    <div className="hero">
      <Layout>
        <Container className="heroContainer">
          <Row>
            <Col className="col" sm={5} md={5} lg={5}>
              <div className="left">
                <div className="leftContent">
                {/* My Intro */}
                <h1 className="name">Hi, I am Shivani Devkota</h1>
                <div className="tag">
                  <Typewriter
                    options={{
                      strings: ["Web Developer", "UI-UX Designer", "Customer Focused"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  </div>
                  
                  <Link className=" text-decoration-none link ">
                    <Button className="globalBtn">Made with ReactJS</Button>
                  </Link>
               
                </div>
               
              </div>
            </Col>
            
            <Col sm={5} md={5} lg={5}>
              <div className="right shadow">
              <div class="gradient-overlay"></div>
              <img className="image" src={user1Img} alt="" />  
              {/* <div  class="hero-img-overlay"></div> */}
              </div>
              
            </Col>
            <Col sm={1} md={1} lg={1}></Col>
           
            
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Hero;
