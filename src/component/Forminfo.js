import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Forminfo() {
  return (
    <div>
         <Container>
      <section className="forminfo">
       <img src='./images/Group 31.svg' alt=''/>
        <Card>
          <Card.Body>
            <h2 className=" mb-4">Can’t see a position that interests you?</h2>
            <p className="">
            Please send your CV and write the name of the position you are interested in. We’ll get in touch with you once we open a suitable role.
            </p>
            <Form className='row'>
            <Form.Group className='col-6'>
            <Form.Label>First Name *</Form.Label>

                <Form.Control
                  id="fristname"
                  type="text"
                  required
                  placeholder="First Name"
                 
                />
              </Form.Group>
              <Form.Group className='col-6'>
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  id="lastname"
                  type="text"
                  required
                  placeholder="Last Name"
                 
                />
              </Form.Group>
              <Form.Group className='col-6'>
              <Form.Label>Email *</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  required
                  placeholder="Email"
                 
                />
              </Form.Group>
              <Form.Group className='col-6'>
              <Form.Label>Position *</Form.Label>

                <Form.Control
                  id="Position"
                  type="text"
                  required
                  placeholder="Position"
                />
              </Form.Group>
             
          

              <Button className="w-100 mt-3 btn-log" type="submit" >
              Sign in
              </Button>
            </Form>
          </Card.Body>
        </Card>
       
      </section>
    </Container>
    </div>
  )
}

export default Forminfo