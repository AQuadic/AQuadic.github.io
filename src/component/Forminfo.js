import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Forminfo() {
  const { t, i18n } = useTranslation();

  return (
    <section className="forminfo">
      <Container>
        <img
          className="imageback"
          src="/images/patterns/pattern_1.svg"
          alt=""
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
              <Form.Group className="col-12  col-sm-6">
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
                />
              </Form.Group>
              <Form.Group className="col-12 col-sm-6">
                <Form.Label>
                  <div>
                    {" "}
                    {t("contact_us.last_name")} <span>*</span>
                  </div>
                </Form.Label>
                <Form.Control
                  id="lastname"
                  type="text"
                  required
                  placeholder={t("contact_us.last_name")}
                />
              </Form.Group>
              <Form.Group className="col-12 col-sm-6">
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
                />
              </Form.Group>
              <Form.Group className="col-12 col-sm-6">
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
                />
              </Form.Group>
              <div className="upload col-12 col-sm-12">
                <input type="file" name="file" />
                <button>
                  <span className="plus">+</span>{" "}
                  <h4>
                    {" "}
                    {t("contact_us.cv")}
                    <span>*</span>
                  </h4>
                </button>
              </div>
              <Button
                className=" col-12 col-sm-12 btn-log btn-page btn-send"
                type="submit"
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

export default Forminfo;
