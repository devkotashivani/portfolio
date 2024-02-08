import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Image from "../assets/img/Coder.png"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    (emailjs.sendForm("service_rljfvjk","template_pszyf6t",form.current, "tXHfNBZnE-N2jQG8m"))
    toast("Email sent successfully")
  };

  return (
    <div id="contact" className="contact mt-4">
      <Container>
        <Row>
          <h2 className="mt-4">Contact Me</h2>
          <Col sm={6} md={6} lg={6}>
            <Form ref={form} onSubmit={sendEmail} className="form">
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                type="text" name="user_name" 
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Sam" name="user_email" required/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1" 
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="sam@example.com"  required/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Write your Message 😊:</Form.Label>
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>

              <Button type="submit" className="globalBtn">Submit</Button>
            </Form>
            
          </Col>
          <Col sm={6} md={6} lg={6}>
            <img className="image" src={Image} />
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default Contact;
