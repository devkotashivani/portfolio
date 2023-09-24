import React from "react";
import { Container, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Experience from "./Experience";
import Education from "./Education";

function About() {
  return (
    <div>
      <div id="about" className="about">
      <Container>
        <Row>
        <h2 className="text-center mt-4">About Me</h2>
          <Tabs
            defaultActiveKey="experience"
            id="uncontrolled-tab-example"
            className=" justify-content-center tabs"
          >
            <Tab eventKey="experience" title="Experience">
             <Experience />
            </Tab>
            <Tab eventKey="education" title="Education">
              <Education />
            </Tab>
            
          </Tabs>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default About;
