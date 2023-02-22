import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import tech from "../data/technologies.json";
function Technologies() {
  const { t} = useTranslation();

  return (
    <div className="technologies">
      <Container>
        <h2>{t("technologies.title")}</h2>
        <div className="alltechnologie">
          {tech.map((item) => {
            return (
              <img
                key={item.id}
                src={item.logo}
                alt={item.name}
                data-aos="fade-up"
                data-aos-delay="0"
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Technologies;
