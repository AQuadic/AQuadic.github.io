import React, {useRef, useState} from "react";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

//import { Link } from "react-router-dom";
import {counteraction} from "../data/data";
import {HashLink} from 'react-router-hash-link';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
function Nav() {
    const { t, i18n } = useTranslation();
    const [langg ,setlangg]=useState("en");
 
    const langEn =()=>{
      i18n.changeLanguage(langg)
     console.log(langg)
      langg ==="en"?setlangg("ar"): setlangg("en")
    
    }
    const lang = i18n.language === "ar" ? "English" :"العربية";
    const langs = i18n.language === "ar" ? "EN":"ع";

   // const [lang, setLang] = useState("English");
   // const [langs, setLangs] = useState("EN");

    const ref = useRef();
    const qi = useSelector((state) => state.dir.value)
    const dispatch = useDispatch();
    const {c_dir} = counteraction;
    return (
        <section className="con ">
            <nav
                className="navbar  navbar-expand-lg navbar-light fixed-top"
                ref={ref}
            >
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img
                            src="/images/logo_vertical.svg"
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
                                    Company
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

                                <HashLink className="nav-link" smooth to="/#about">
                                    About Us
                                </HashLink>
                            </li>
                            <li
                                className="nav-item"
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                <HashLink className="nav-link" smooth to="/#services">
                                    Services
                                </HashLink>

                            </li>

                            <li
                                className="nav-item"
                                data-aos="fade-left"
                                data-aos-delay="150"
                            >
                                <HashLink className="nav-link" smooth to="/#contact">
                                    Contact Us
                                </HashLink>

                            </li>
                        </ul>
                    </div>
                    <button
                        className="lang "
                        onClick={() => {
                            langEn()
                           

                        }}
                    >
                        <img src="/images/icons/lang.svg" alt=""/>
                        {window.innerWidth > 992 ? lang : langs}{" "}
                    </button>
                </Container>
            </nav>
        </section>
    );
}

export default Nav;
