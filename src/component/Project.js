import React from "react";
import Layout from "./Layout";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image1 from "../assets/img/5.png";
import Image2 from "../assets/img/6.png";
import Image3 from "../assets/img/1.png";
import Image4 from "../assets/img/2.png";
import Image5 from "../assets/img/3.png";
import Image6 from "../assets/img/4.png";

function Project() {
  return (
    <div id="projects" className="projects mb-4 ">
      <Container>
        <h2>My Projects</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Image1} />

              <Card.Body>
                <Card.Title>ANFS Website</Card.Title>
                <Card.Text>Wordpress, cpanel, figma</Card.Text>
                <Button
                  className="globalBtn"
                  href="https://www.anfscanberra.org.au/"
                  target="_blank"
                >
                  See Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Stellas Website</Card.Title>
                <Card.Text>Figma, wix, goDaddy</Card.Text>
                <Button
                  className="globalBtn"
                  href="https://www.stellasbythelake.com.au/"
                  target="_blank"
                >
                  See Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title>To Do List</Card.Title>
                <Card.Text>
                 HTML, SCSS, Javascript
                </Card.Text>
                <Button
                  className="globalBtn"
                  href="https://todolist-vert-ten.vercel.app/"
                  target="_blank"
                >
                  See Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Image4} />

              <Card.Body>
                <Card.Title>Prank Calculator</Card.Title>
                <Card.Text>
                  HTML, SCSS, ReactJS
                </Card.Text>
                <Button
                  className="globalBtn"
                  href="https://prankcalculator.vercel.app/"
                  target="_blank"
                >
                  See Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Image5} />
              <Card.Body>
                <Card.Title>Movie Api</Card.Title>
                <Card.Text>
                 HTML, SCSS, ReactJS, API
                </Card.Text>
                <Button
                  className="globalBtn"
                  href="https://movie-api-two-jade.vercel.app/"
                  target="_blank"
                >
                  See Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
