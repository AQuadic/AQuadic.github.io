import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "./Message";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Team() {
  const { t} = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="team">
     <HelmetProvider>
<Helmet>
        
        <title>AQuadic | Team</title>
        <link rel="canonical" href={`https://aquadic.com/team`}  />
        <meta
      name="description"
      content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
    />
      </Helmet>
      <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
        <img src="/images/team/team.svg" alt="hosting" />
        <div className="about_img_team">
          <h2>{t("team.title")}</h2>
          <p>{t("team.description")}</p>
        </div>
      </div>
      <Container>
        <div className="part  part1">
          <div className="des_team">
            <h2>{t("team.leadership.title")}</h2>
            <p>{t("team.leadership.description")}</p>
          </div>
          <div className="about_team ">
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img bink">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Backend Developer</p>
              </div>
            </div>
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img blue">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>UI UX Designer</p>
              </div>
            </div>
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img orange">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="part  part2">
          <div className="des_team">
            <h2>{t("team.creative.title")}</h2>
            <p>{t("team.creative.description")}</p>
          </div>
          <div className="about_team ">
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img bink">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Backend Developer</p>
              </div>
            </div>
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img blue">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>UI UX Designer</p>
              </div>
            </div>
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img orange">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img bink">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img blue">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="person " onClick={() => navigate("/person")}>
              <div className="person_img orange">
                <img src="/images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Message />
    </HelmetProvider>
    </div>
  );
}

export default Team;
