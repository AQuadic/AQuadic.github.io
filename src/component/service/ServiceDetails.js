import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import projects from "../../data/projects.json";
import services from "../../data/services.json";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ServiceDetails() {
  // Language.
  const { t, i18n } = useTranslation();

  const params = useParams();

  const [tech, settech] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div>
        <img src="/images/icons/arrow_left.svg" alt="prevArrow" />
      </div>
    ),
    nextArrow: (
      <div>
        <img src="/images/icons/arrow_right.svg" alt="nextArrow" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
        },
      },
    ],
  };

  const current_services = services.find((item) => item.id === +params.id);

  const tech_info = current_services.technologies.find(
    (item) => item.id === tech
  );

  const projects_services = projects.filter((item) =>
    item.services.find((item) => item.id === +params.id)
  );

  return (
    <div className="jop-about">
      <HelmetProvider>
        <Helmet>
          <title>
            AQuadic | {current_services.name[i18n.resolvedLanguage]}
          </title>
          <link
            rel="canonical"
            href={`https://aquadic.com/service/${params.id}`}
          />
          <meta
            name="description"
            content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
          />
        </Helmet>
        <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
          <img src="/images/header/header_part_5.svg" alt="careers" />
          <h2>{current_services.name[i18n.resolvedLanguage]}</h2>
        </div>
        <div className="plan">
          <Container>
            <h2>
              {current_services.name[i18n.resolvedLanguage]}{" "}
              {t("services.page.process")}
            </h2>
            <div className="parts-plan">
              {current_services.process.map((processItem) => {
                return (
                  <div className="part-plan" key={processItem.id}>
                    <h3>{processItem.id}</h3>
                    <div className="plan-about">
                      <h4>{processItem.name[i18n.resolvedLanguage]}</h4>
                      <div className="plan-span">
                        <span></span>
                        <span></span>
                      </div>
                      <ul>
                        {processItem.points[i18n.resolvedLanguage].map(
                          (item,index) => {
                            return <li key={index}> {item}</li>;
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
        {projects_services.length > 0 ? (
          <div className="our_creative">
            <Container>
              <div>
                <h2 className="header-our">
                  {" "}
                  {t("services.page.ourCreative")}{" "}
                  {current_services.name[i18n.resolvedLanguage]}
                </h2>
                <Slider {...settings}>
                  {projects_services.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="pharm">
                          <div className="row">
                            <img
                              src={item.main_image}
                              className="img-pharm col-lg-5 col-md-6 col-sm-9"
                              data-aos="zoom-in"
                              alt="Group"
                            />
                            <div className="about-pharm col-lg-6 col-md-6">
                              <div className="title">
                                <img src={item.logo} alt="logo icon" />
                                <h1 style={{ color: item.primary_color }}>
                                  {item.name[i18n.resolvedLanguage]}
                                </h1>
                              </div>
                              <p
                                className="text"
                                style={{ maxHeight: "190px" }}
                              >
                                {item.description[i18n.resolvedLanguage]}
                              </p>
                              <Link
                                to={`/portfolio/${item.id}`}
                                className="view"
                              >
                                <p>{t("portfolio.view_details")}</p>
                                <img
                                  src="/images/icons/arrow.svg"
                                  alt="arrow"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Container>
          </div>
        ) : null}
        {current_services.technologies.length ? (
          <div className="jop-tech">
            <Container>
              <h2>
                {" "}
                {current_services.name[i18n.resolvedLanguage] +
                  " " +
                  t("services.page.technologies")}{" "}
              </h2>
              <div className="all-part">
                <div className="part1">
                  <div className="tech">
                    <h3>
                      {current_services.name[i18n.resolvedLanguage]}{" "}
                      {t("services.page.platforms")}
                    </h3>
                    <div className="tech-img">
                      <ul>
                        {current_services.technologies.map((item) => {
                          return (
                            <li
                              key={item.id}
                              onClick={() => {
                                settech(item.id);
                              }}
                            >
                              <img src={item.logo} alt={item.name[i18n.resolvedLanguage]} />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                {tech_info ? (
                  <div className="part2">
                    <img
                      src={tech_info.logo}
                      alt={tech_info.name[i18n.resolvedLanguage]}
                    />
                    <div className="about-tech">
                      <h3>{tech_info.name[i18n.resolvedLanguage]}</h3>
                      <p>{tech_info.description[i18n.resolvedLanguage]}</p>
                    </div>
                  </div>
                ) : (
                  <div className="part2">
                    <img
                      src={current_services.technologies[0].logo}
                      alt={
                        current_services.technologies[0].name[
                          i18n.resolvedLanguage
                        ]
                      }
                    />
                    <div className="about-tech">
                      <h3>
                        {
                          current_services.technologies[0].name[
                            i18n.resolvedLanguage
                          ]
                        }
                      </h3>
                      <p>
                        {
                          current_services.technologies[0].description[
                            i18n.resolvedLanguage
                          ]
                        }
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </div>
        ) : null}
      </HelmetProvider>
    </div>
  );
}

export default ServiceDetails;
