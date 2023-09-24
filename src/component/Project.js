import React from "react";
import Layout from "./Layout";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "../assets/img/project.png"
function Project() {
  return (
    <div id="projects" className="projects mb-4 ">
      
        <Container >
          <h2>My Projects</h2>
          <Row>
            
            <Col md={4}>
              <Card>
                
              <Card.Img variant="top" src={Image} />
                
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="globalBtn">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col  md={4}>
              <Card>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="globalBtn">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>

              <Col  md={4}>
              <Card>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="globalBtn">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
     
    </div>
  );
}

export default Project;
