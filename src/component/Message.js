import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

function Message() {
  const { t, i18n } = useTranslation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //loading
  let [loading, setLoading] = useState(false);

  //validation
  const [validated, setValidated] = useState(false);

  //form data
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  //errors

  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSubject, setErrorSubject] = useState("");

  let formdata = new FormData();
  console.log(i18n.resolvedLanguage);
  console.log(i18n.language);
  const SendMessage = () => {
    setLoading(true);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("subject", subject);
    formdata.append("phone", phone);
    formdata.append("message", message);

    axios({
      url: "https://eshhaar.net/api/contact_us",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-Language": i18n.resolvedLanguage,
      },
      data: formdata,
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
        setShow(true);
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrorEmail("");
        setErrorName("");
        setErrorPhone("");
        setErrorMessage("");
        setErrorSubject("");
      })
      .catch((err) => {
        setLoading(false);

        console.log(err.response.data.errors);
        setValidated(true);
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
    <>
      <section className="forminfo message" id="contact">
        <Container>
          <img
            className="imageback"
            src="/images/patterns/pattern_1.svg"
            alt="pattern"
          />
          <Card>
            <Card.Body>
              <h2 className=" mb-4">{t("contact_us.title")}</h2>

              <Form
                className="row"
                noValidate
                validated={validated}
                style={
                  loading
                    ? { pointerEvents: "none" }
                    : { pointerEvents: "visible" }
                }
              >
                <Form.Group className="col-12  col-sm-6">
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
                <Form.Group className="col-12 col-sm-6">
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
                <Form.Group className="col-12 col-sm-6">
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
                <Form.Group className="col-12 col-sm-6">
                  <Form.Control
                    id="Position"
                    type="text"
                    required
                    placeholder={t("contact_us.subject")}
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
                {loading ? (
                  <div className="load">
                    <BounceLoader
                      color="#f15f57"
                      size={40}
                      cssOverride={{
                        margin: "auto 0",
                        display: "block",
                      }}
                    />
                  </div>
                ) : (
                  <Button
                    className=" col-12 col-sm-12 btn-log btn-page btn-send"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      SendMessage();
                    }}
                  >
                    {t("contact_us.send_message")}
                  </Button>
                )}
              </Form>
              <div className="contact">
                <h4>{t("contact_us.subtitle")}</h4>
                <ul>
                  <li>
                    <a href="tel:+201101782890">
                      <img src="/images/icons/phone.svg" alt="phone" />
                      <h5 className="und" style={{ direction: "ltr" }}>
                        (+20) 110 178 2890
                      </h5>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@aquadic.com">
                      <img src="/images/icons/mail.svg" alt="email" />
                      <h5 className="und">hello@aquadic.com</h5>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://g.page/aquadic"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src="/images/icons/map_off.svg" alt="map" />
                      <h5>418 El Geish Road,Louran, Alexandria, Egypt</h5>
                    </a>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Container>
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            className="model-send"
            centered
          >
            <Modal.Header closeButton className="model-img"></Modal.Header>
            <Modal.Body className="model-bo">
              <h2>{t("contact_us.thank")}</h2>
              <p>{t("contact_us.thankTitle")}</p>
            </Modal.Body>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default Message;
