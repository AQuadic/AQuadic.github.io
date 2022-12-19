import React from 'react'
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Message() {
  return (
    <section className="forminfo message">
    <Container>
      <img className='imageback' src="%PUBLIC_URL%/images/Group 31.svg" alt="" />
      <Card>
        <Card.Body>
          <h2 className=" mb-4">Get In Touch</h2>
          
          <Form className="row">
            <Form.Group className="col-12  col-sm-6">
             

              <Form.Control
                id="fristname"
                type="text"
                required
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="col-12 col-sm-6">
             
              <Form.Control
                id="lastname"
                type="text"
                required
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="col-12 col-sm-6">
              
              <Form.Control
                id="email"
                type="email"
                required
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="col-12 col-sm-6">
           

              <Form.Control
                id="Position"
                type="text"
                required
                placeholder="Subject"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={4} placeholder="Leave Your Message..." />
      </Form.Group>
               
            <Button className=" col-12 col-sm-12 btn-log btn-page btn-send" type="submit">
              Send Message
            </Button>
           
          </Form>
          <div className='contact'>
            <h4>
            Contact Info
            </h4>
            <ul>
                <li>
                    <img src="%PUBLIC_URL%/images/phone.svg" alt='' />
                    <h5 className='und'>(+20) 110 178 2890</h5>
                </li>
                <li>
                    <img src="%PUBLIC_URL%/images/masseg.svg" alt='' />
                    <h5 className='und'>hello@aquadic.com</h5>
                </li>
                <li>
                    <img src="%PUBLIC_URL%/images/phone.svg" alt='' />
                    <h5>418 El Geish Road,Louran, Alexandria, Egypt</h5>
                </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Container>
  </section>
  )
}

export default Message