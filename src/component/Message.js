import React, { useRef, useState } from 'react'
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


import Modal from 'react-bootstrap/Modal';



function Message() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="forminfo message" id='contact'>
    <Container>
      <img className='imageback' src="./images/patterns/pattern_1.svg" alt="" />
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
               
            <Button className=" col-12 col-sm-12 btn-log btn-page btn-send" type="submit" onClick={handleShow}>
              Send Message
            </Button>
           
          </Form>
          <div className='contact'>
            <h4   >
            Contact Info
            </h4>
            <ul>
                <li>
                  <a href='tel:+201101782890' >
                  <img src="./images/icons/phone.svg" alt='' />
                    <h5 className='und'>(+20) 110 178 2890</h5>
                  </a>
                    
                </li>
                <li>
                  <a href='mailto:hello@aquadic.com' >
                  <img src="./images/icons/mail.svg" alt='' />
                    <h5 className='und'>hello@aquadic.com</h5>
                  </a>
                    
                </li>
                <li>
                  <a href='https://g.page/aquadic'  target="_blank">
                    <img src="./images/icons/map_off.svg" alt='' />
                    <h5>418 El Geish Road,Louran, Alexandria, Egypt</h5></a>
                    
                </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Container>
 <div>
      <Modal show={show} onHide={handleClose} className="model-send"   centered>
        <Modal.Header closeButton className='model-img'>
    
        </Modal.Header >
        <Modal.Body className='model-bo'><h2>Thank you !</h2>
        <p>Thanks for contacting us, <br/>we will reply to you as soon as possible</p>
        </Modal.Body>
       
      </Modal>
      </div>
  </section>
  )
}

export default Message