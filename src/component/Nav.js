import React, {useRef} from "react";
import {Container} from "react-bootstrap";
import {HashLink} from 'react-router-hash-link';
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';

function Nav() {
    const {t, i18n} = useTranslation();

    const changeLang = () => {
        i18n.language === "en" ?  i18n.changeLanguage('ar')   : i18n.changeLanguage('en')
    }

    const lang = i18n.language === "ar" ? "English" : "العربية";
    const langs = i18n.language === "ar" ? "EN" : "ع";
    const ref = useRef();

    return (
        <section className="con ">
            <nav className="navbar  navbar-expand-lg navbar-light fixed-top" ref={ref}>
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo_vertical.svg" className="logo" alt="navbar-brand"/>
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
                                    {t('nav.company')}
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/team">
                                            {t('nav.team')}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/career">
                                            {t('nav.career')}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/hosting">
                                            {t('nav.hosting_sites')}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/time_model">
                                            {t('nav.pricing_models')}
                                        </Link>
                                    </li>

                                    {/*<li>*/}
                                    {/*    <Link className="dropdown-item" to="#">*/}
                                    {/*        {t('nav.payment_methods')}*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                </ul>
                            </li>

                            <li className="nav-item" data-aos="fade-left" data-aos-delay="50">
                                <HashLink className="nav-link" smooth to="/#about">
                                    {t('nav.about_us')}
                                </HashLink>
                            </li>

                            <li className="nav-item" data-aos="fade-right" data-aos-delay="100">
                                <HashLink className="nav-link" smooth to="/#services">
                                    {t('nav.services')}
                                </HashLink>
                            </li>

                            <li className="nav-item" data-aos="fade-left" data-aos-delay="150">
                                <HashLink className="nav-link" smooth to="/#contact">
                                    {t('nav.contact_us')}
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                    <button className="lang" onClick={() => {
                        changeLang()
                    }}>
                        <img src="/images/icons/lang.svg" alt=""/>
                        {window.innerWidth > 992 ? lang : langs}
                    </button>
                </Container>
            </nav>
        </section>
    );
}

export default Nav;
