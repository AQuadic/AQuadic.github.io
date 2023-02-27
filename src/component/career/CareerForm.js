import axios from "axios";
import React from "react";
import { useState } from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";

function CareerForm() {
    const {t,i18n} = useTranslation();

     //form data
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  //errors

  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorFile, setErrorFile] = useState("");

  let formdata = new FormData();
  const SendMessage = () => {
    
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("subject", subject);
    formdata.append("phone", phone);
    formdata.append("message", message);
    formdata.append("attachment", file);

    axios({
      url: "https://eshhaar.net/api/contact_us",
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-Language": i18n.resolvedLanguage,
      },
      data: formdata,
    })
      .then((res) => {
      
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
        setFile("")
        setErrorEmail("");
        setErrorName("");
        setErrorPhone("");
        setErrorMessage("");
        setErrorSubject("");
        setErrorFile("");
      })
      .catch((err) => {
       console.log(err)
        err.response.data.errors.email
          ? setErrorEmail(err.response.data.errors.email)
          : setErrorEmail("");
        err.response.data.errors.name
          ? setErrorName(err.response.data.errors.name)
          : setErrorName("");
        err.response.data.errors.phone
          ? setErrorPhone(err.response.data.errors.phone)
          : setErrorPhone("");
        err.response.data.errors.message
          ? setErrorMessage(err.response.data.errors.message)
          : setErrorMessage("");
        err.response.data.errors.subject
          ? setErrorSubject(err.response.data.errors.subject)
          : setErrorSubject("");

      });
  };

    return (
        <section className="forminfo">
            <Container>
                <img
                    className="imageback"
                    src="/images/patterns/pattern_1.svg"
                    alt="imageback"
                />
                <Card>
                    <Card.Body>
                        <h2 className=" mb-2">
                            {t("career.positions.cant_see_position.title")}
                        </h2>
                        <p className="">
                            {t("career.positions.cant_see_position.description")}
                        </p>
                        <Form className="row">
                            <Form.Group className="col-12  col-sm-6 mb-4">
                                <Form.Label>
                                    <div>
                                        {t("contact_us.first_name")} <span>*</span>
                                    </div>
                                </Form.Label>

                                <Form.Control
                                    id="fristname"
                                    type="text"
                                    required
                                    placeholder={t("contact_us.first_name")}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                      }}
                                      value={name}
                                />
                                  {errorName ? (
                    <div className="errorinput">{errorName}</div>
                  ) : (
                    ""
                  )}
                            </Form.Group>
                            <Form.Group className="col-12 col-sm-6 mb-4">
                                <Form.Label>
                                    <div>
                                        {" "}
                                        {t("contact_us.t_pohne")} <span>*</span>
                                    </div>
                                </Form.Label>
                                <Form.Control
                    id="phone"
                    type="tel"
                    minLength={8}
                    required
                    placeholder={t("contact_us.phone")}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                  />
                  {errorPhone ? (
                    <div className="errorinput">{errorPhone}</div>
                  ) : (
                    ""
                  )}
                            </Form.Group>
                            <Form.Group className="col-12 col-sm-6 mb-4">
                                <Form.Label>
                                    <div>
                                        {" "}
                                        {t("contact_us.email")} <span>*</span>
                                    </div>
                                </Form.Label>
                                <Form.Control
                                    id="email"
                                    type="email"
                                    required
                                    placeholder={t("contact_us.email")}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                      }}
                                      value={email}
                                />
                                 {errorEmail ? (
                    <div className="errorinput">{errorEmail}</div>
                  ) : (
                    ""
                  )}
                            </Form.Group>
                            <Form.Group className="col-12 col-sm-6 mb-4">
                                <Form.Label>
                                    <div>
                                        {" "}
                                        {t("contact_us.position")} <span>*</span>
                                    </div>
                                </Form.Label>

                                <Form.Control
                                    id="Position"
                                    type="text"
                                    required
                                    placeholder={t("contact_us.position")}
                                    onChange={(e) => {
                                        setSubject(e.target.value);
                                      }}
                                      value={subject}
                                />
                                 {errorSubject ? (
                    <div className="errorinput">{errorSubject}</div>
                  ) : (
                    ""
                  )}
                            </Form.Group>
                            <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={4}
                    required
                    placeholder={t("contact_us.message")}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  />
                  {errorMessage ? (
                    <div className="errorinput">{errorMessage}</div>
                  ) : (
                    ""
                  )}
                             </Form.Group>
                            <div className="upload col-12 col-sm-12">
                                <input type="file"  onChange={(e)=>{setFile(e.target.files[0]); console.log(e.target.files[0])}} name="file"/>
                                <button>
                                    <span className="plus">+</span>{" "}
                                    <h4>
                                        {" "}
                                        {t("contact_us.cv")}
                                        <span>*</span>
                                    </h4>
                                </button>
                               { errorFile ? (
                    <div className="errorinput">{errorFile}</div>
                  ) : (
                    ""
                  )}
                            </div>
                            <Button
                                className=" col-12 col-sm-12 btn-log btn-page btn-send"
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    SendMessage();
                                  }}
                            >
                                {t("contact_us.send_application")}
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    );
}

export default CareerForm;
