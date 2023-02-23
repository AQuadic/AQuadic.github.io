import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import all_data from "../data/projects.json";
import data from "../data/projects.json";
import ProjectModal from "./ProjectModal";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ProjectDetails(props) {
  const { t, i18n } = useTranslation();

  const settings = {
    className: "center",
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
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const btn1 = useRef();
  const btn2 = useRef();
  const { id } = useParams();
  const [similar, setsimilar] = useState();
  const [type_show, settype_show] = useState("images_mobile");
  const [dataa, setdataa] = useState();
  const params=id ? id : 0;
  const gettarget = () => {
    if (params !== 0) {
      const get = data.filter((item) => item.id === +id);
      setdataa(get);
      const sim = all_data.filter(
        (data) => data.category.id === get[0].category.id
      );
      setsimilar(sim);
    }
  };

 
  useEffect(() => {
    gettarget();
  }, [,id]);
  const [currentProject, setCurrentProject] = useState(all_data[0]);

  return dataa ? (
    <div className="target-project">
  <HelmetProvider>
<Helmet>
        
        <title>Project Details</title>
        <link rel="canonical" href={`https://aquadic.com/portfolio/${id}`}  />
        <meta
      name="description"
      content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
    />
      </Helmet>

      <Container>
        <div className="pharm">
          <div className="row">
            <div className="about-pharm col-lg-6 col-md-6">
              <div className="title">
                <img
                  src={dataa[0].logo}
                  alt="logo icon"
                  height="150px"
                  width="150px"
                />
                <h1 style={{ color: dataa[0].primary_color }}>
                  {dataa[0].name[i18n.language]}
                </h1>
              </div>

              <p className="text">{dataa[0].description[i18n.language]}</p>
              <p className="tryit">{t("portfolio.try_it_now")}</p>

              <ul className="go-app">
                {Object.keys(dataa[0].links).map(function (key) {
                  const link = dataa[0].links[key];
                  const img = `/images/apps/${key}.svg`;
                  return link ? (
                    <li key={key}>
                      <a target={"_blank"} rel="noreferrer" href={link}>
                        <img src={img} alt={key} />
                      </a>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>

            <img
              src={dataa[0].main_image}
              className="img-pharm col-lg-5 col-md-6 col-sm-9"
              data-aos="zoom-in"
              alt="Group"
            />
          </div>
        </div>

        <div className="testimonials2">
          <h2>{t("portfolio.screens")}</h2>

          <div className="btn-testimonials2">
            {dataa[0].images_mobile ? (
              dataa[0].images_desktop ? (
                <>
                  <button
                    ref={btn1}
                    className="open"
                    onClick={(e) => {
                      settype_show("images_mobile");
                      btn2.current.classList.remove("open");
                      e.target.classList.add("open");
                    }}
                  >
                    {t("portfolio.mobile")}
                  </button>

                  <button
                    ref={btn2}
                    onClick={(e) => {
                      settype_show("images_desktop");
                      btn1.current.classList.remove("open");
                      e.target.classList.add("open");
                    }}
                  >
                    {t("portfolio.desktop")}
                  </button>
                </>
              ) : (
                <></>
              )
            ) : null}
          </div>
          {dataa[0].images_mobile && dataa[0].images_desktop ? (
            <Slider {...settings}>
              {dataa[0][type_show].map((img_url) => {
                return (
                  <div key={img_url}>
                    <img src={img_url} alt="logo icon" />
                  </div>
                );
              })}
            </Slider>
          ) : dataa[0].images_mobile ? (
            <Slider {...settings}>
              {dataa[0].images_mobile.map((img_url) => {
                return (
                  <div key={img_url}>
                    <img src={img_url} alt="logo icon" />
                  </div>
                );
              })}
            </Slider>
          ) : dataa[0].images_desktop ? (
            <Slider {...settings}>
              {dataa[0].images_desktop.map((img_url) => {
                return (
                  <div key={img_url}>
                    <img src={img_url} alt="logo icon" />
                  </div>
                );
              })}
            </Slider>
          ) : null}
        </div>
      </Container>

      <div className="over">
        <div className="container">
          <h2>OverView</h2>
          <div className="over-about">
            <div className=" part part1">
              <h3>Scope</h3>
              <div className="one ">
                <div className="one1 page ">
                  <img src="/images/overview/phone.svg" alt="phone" />
                  <h4>Mobile</h4>
                  <p>our platform is mobile cuz user of the project</p>
                </div>
                <div className="one2 page">
                  <img src="/images/overview/wep.svg" alt="phone" />
                  <h4>Admin Back Office</h4>
                  <p>our platform is mobile cuz user of the project</p>
                </div>
              </div>
            </div>

            <div className="part part2">
              <div className="to">
                <div className="to1">
                  <h3>Technology</h3>
                  <div className="about-part page">
                    <div className="g-img">
                      <img src="/images/overview/phone.svg" alt="" />
                      <img src="/images/overview/wep.svg" alt="" />
                    </div>
                    <h4>
                      
                      {dataa[0].technologies.map((img) => (
                        <span key={img.id}> {img.name[i18n.language] + "," }</span>
                      ))}
                    </h4>
                    <div className="g-img f-img">
                      {dataa[0].technologies.map((img) => (
                        <img key={img.id} src={img.logo} alt={img.name} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="to2 ">
                  <h3>Team</h3>
                  <div className="about-part page">
                    <div className="g-img">
                      <img src="/images/overview/team.svg" alt="" />
                    </div>
                    <h4>6 members</h4>
                    <p>our platform is mobile cuz user of the project</p>
                  </div>
                </div>

                <div className="to3 ">
                  <h3>Duration</h3>
                  <div className="about-part page">
                    <div className="g-img">
                      <img src="/images/overview/time.svg" alt="" />
                    </div>
                    <h4>3 months</h4>
                    <p>our platform is mobile cuz user of the project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        {similar.length > 1 ? (
          <div className="look">
            <h2>{t("portfolio.interested")}</h2>
            <h3 className="h3-look">{t("portfolio.similar")}</h3>
            <div className="all-portfolio row">
              {similar
                .filter((item) => {
                  return item.id !== +id;
                })
                .slice(0, 3)
                .map((data) => {
                  return (
                    <div
                      className="project col-lg-3 col-md-5 col-sm-5 col-12 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalLong"
                      key={data.id}
                      onClick={() => {
                        setCurrentProject(data);
                      }}
                    >
                      <h3>{data.name[i18n.language]}</h3>
                      <p>{data.category.name[i18n.language]}</p>
                      <img
                        src={data.main_image}
                        alt={data.name[i18n.language]}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        ) : null}
      </Container>
      <ProjectModal currentProject={currentProject} />
     </HelmetProvider>
    </div>
  ) : (
    <div>no data her </div>
  );
}

export default ProjectDetails;
