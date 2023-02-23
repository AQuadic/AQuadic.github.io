import React from "react";
import { Container } from "react-bootstrap";
import hosting from "../data/hosting.json";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Hosting() {
  const {t , i18n } = useTranslation();

  return (
    <div className="hosting">
        <HelmetProvider>
 <Helmet>
        
        <title>Hosting</title>
        <link rel="canonical" href={`https://aquadic.com/hosting`}  />
        <meta
      name="description"
      content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
    />
      </Helmet>
      <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
        <img src="/images/hosting/hosting.svg" alt="hosting" />
        <h2>
        {t("hosting.title")}
        </h2>
      </div>
      <Container>
        <div className="part_host" key={hosting[0].id}>
          <div className="about_host">
            <img src={hosting[0].image} alt="" />
            <div className="info_host">
              <h2>{hosting[0].name[i18n.language]}</h2>
              <p>{hosting[0].description[i18n.language]}</p>
            </div>
          </div>
          <a  target={"_blank"} rel="noreferrer" href={hosting[0].url}>
            <button className="btn-page"> {t("hosting.visit")}</button>
          </a>
        </div>
      </Container>
      </HelmetProvider>
    </div>
  );
}

export default Hosting;
