import React, { useRef, useState ,useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { counteraction } from "../data/data";

function Nav() {
  const [lang, setlang] = useState("English");
  const [langs, setlangs] = useState("EN");

  const ref = useRef();
  const qi = useSelector((state)=>state.dir.value)
  const dispatch = useDispatch();
  const { c_dir } = counteraction;
  return (
    <section className="con ">
      <nav
        className="navbar  navbar-expand-lg navbar-light fixed-top"
        ref={ref}
      >
        <Container>
          <Link className="navbar-brand" to="/">
            <img
              src="./images/logo_vertical.svg"
              className="logo"
              alt="navbar-brand"
            />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {qi}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/career">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/hosting">
                      Hosting Sites
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/time_model">
                      Pricing Models
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Payment Method
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item" data-aos="fade-left" data-aos-delay="50">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li
                className="nav-item"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              <li
                className="nav-item"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <a className="nav-link " href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <button
            className="lang "
            onClick={() => {
           
              if (lang === "English" || langs === "EN") {
                setlang("Arabic");
                setlangs("AR");
                window.document.dir = "rtl";
                dispatch(c_dir('AR'));
              } else {
                setlang("English");
                setlangs("EN");
                window.document.dir = "ltr";
                dispatch(c_dir("EN"));
              }
            
            }}
          >
            <img src="./images/icons/lang.svg" alt="" />
            {window.innerWidth > 992 ? lang : langs}{" "}
          </button>
        </Container>
      </nav>
    </section>
  );
}

export default Nav;
