import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import projects from "../data/projects.json";
import services from "../data/services.json";
import { useTranslation } from "react-i18next";

function JobAbout() {
  // Language.
  const {  i18n } = useTranslation();

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
        <img src="/images/icons/arrow_left.svg" alt="" />
      </div>
    ),
    nextArrow: (
      <div>
        <img src="/images/icons/arrow_right.svg" alt="" />
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

  const type = [];
  const projects_services = [];

  const mob_data = () => {
    projects.map((item) =>
      item.services.map((id) => {
        if (id.id === +params.id) {
          type.push(id);
          projects_services.push(item)
        }
      })
    );
  };
  mob_data();

  const current_services = services.filter((item) => {
    return item.id === +params.id;
  });
  

  const tech_info = current_services[0].technologies.filter((item) => {
    return item.id === tech;
  });
console.log(current_services[0].process)
  return (
    <div className="jop-about">
      <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
        <img src="/images/header/header_part_5.svg" alt="careers" />
        <h2>{current_services[0].name[i18n.language]}</h2>
      </div>
      <div className="plan">
        <Container>
          <h2>{current_services[0].name[i18n.language]} Process</h2>
          <div className="parts-plan">
            {current_services[0].process.map((processItem) => {
              return (
                <div className="part-plan">
                  <h3>{processItem.id}</h3>
                  <div className="plan-about">
                    <h4>{processItem.name[i18n.language]}</h4>
                    <div className="plan-span">
                      <span></span>
                      <span></span>
                    </div>
                    <ul>
                    {
                    processItem.points[i18n.language].map((item)=>{
                      return (
                        <li> {item}</li>
                      )
                    })
                    }
                    
                    </ul>
                  </div>
                </div>
              );
            })}

            
          </div>
        </Container>
      </div>
      {type.length > 0 ? (
        <div className="our_creative">
          <Container>
            <div>
              <h2 className="header-our"> Our Creative {current_services[0].name[i18n.language]}</h2>
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
                              <img
                                src={item.logo}
                                alt="logo icon"
                              />
                              <h1>{item.name[i18n.language]}</h1>
                            </div>
                            <p className="text">
                              {item.description[i18n.language]}
                            </p>
                            <Link
                            to={`/portfolio/${item.id}`}
                              className="view"
                            >
                              <p>View Details</p>
                              <img src="/images/icons/arrow.svg" alt="" />
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

      <div className="jop-tech">
        <Container>
          <h2>UI UX Technologies</h2>
          <div className="all-part">
            <div className="part1">
              <div className="tech">
                <h3>Design platforms</h3>
                <div className="tech-img">
                  <ul>
                    {current_services[0].technologies.map((item) => {
                      return (
                        <li
                          onClick={() => {
                            settech(item.id);
                          }}
                        >
                          <img src={item.logo} alt="" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            {tech_info.length > 0 ? (
              <div className="part2">
                <img src={tech_info[0].logo} alt="" />
                <div className="about-tech">
                  <h3>{tech_info[0].name[i18n.language]}</h3>
                  <p>{tech_info[0].description[i18n.language]}</p>
                </div>
              </div>
            ) : (
              <div className="part2">
                <img src="/images/technologies/xd1.svg" alt="" />
                <div className="about-tech">
                  <h3>Adobe xd</h3>
                  <p>
                    Adobe XD is a powerful and easy-to-use vector-based
                    experience design platform that gives teams the tools they
                    need to craft the world's best experiences collaboratively.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default JobAbout;
