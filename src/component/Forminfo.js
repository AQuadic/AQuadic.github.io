import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Forminfo() {
  return (
    <section className="forminfo">
      <Container>
        <img className="imageback" src="%PUBLIC_URL%/images/Group 31.svg" alt="" />
        <Card>
          <Card.Body>
            <h2 className=" mb-2">Can’t see a position that interests you?</h2>
            <p className="">
              Please send your CV and write the name of the position you are
              interested in. We’ll get in touch with you once we open a suitable
              role.
            </p>
            <Form className="row">
              <Form.Group className="col-12  col-sm-6">
                <Form.Label><div>First Name  <span>*</span></div></Form.Label>

                <Form.Control
                  id="fristname"
                  type="text"
                  required
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group className="col-12 col-sm-6">
                <Form.Label> <div> First Name  <span>*</span></div></Form.Label>
                <Form.Control
                  id="lastname"
                  type="text"
                  required
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group className="col-12 col-sm-6">
                <Form.Label> <div> Email  <span>*</span></div></Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  required
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group className="col-12 col-sm-6">
                <Form.Label><div> Position  <span>*</span></div></Form.Label>

                <Form.Control
                  id="Position"
                  type="text"
                  required
                  placeholder="Position"
                />
              </Form.Group>
<div className="upload col-12 col-sm-12">
<input type="file" name="file" />
<button><span className="plus">+</span> <h4>Upload Your CV <span>*</span></h4> </button>
</div>
              <Button className=" col-12 col-sm-12 btn-log btn-page btn-send" type="submit">
                Send Application
              </Button>
              
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default Forminfo;
