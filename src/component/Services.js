import React from "react";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Services() {
    const { t, i18n } = useTranslation();

    const navigate = useNavigate()
    window.open = () => {
        window.scrollTo(250, 250)
    }
    return (
        <div className="services" id="services">
            <Container>
                <h2>{t("services.title")}</h2>
                <div className="  all-services" onClick={() => {
                    navigate('/job_about')
                }}>
                    <div className=" one   part " onClick={() => {
                        navigate('/job_about')
                    }}>
                        <img src="/images/services/web.png" alt=""/>
                        <h3>{t("services.web.title")}</h3>
                        <p>
                        {t("services.web.description")}
                        </p>
                    </div>
                    <div className=" two part nocomplete" onClick={() => {
                        navigate('/job_about')
                    }}>
                        <img src="/images/services/mobile.png" alt=""/>
                        <h3>{t("services.mobile.title")}</h3>
                        <p>
                             {t("services.mobile.description")}
                        </p>
                    </div>
                    <div className=" three  part nocomplete" onClick={() => {
                        navigate('/job_about')
                    }}>
                        <img src="/images/services/ui_ux.png" alt=""/>
                        <h3>{t("services.ux.title")}</h3>
                        <p>
                            {t("services.ux.description")}
                        </p>

                    </div>
                    <div className=" four part nocomplete" onClick={() => {
                        navigate('/job_about')
                    }}>
                        <img src="/images/services/custom.png" alt=""/>
                        <h3>{t("services.custom.title")}</h3>
                        <p>
                             {t("services.custom.description")}
                        </p>

                    </div>
                    <div className=" five  part " onClick={() => {
                        navigate('/job_about')
                    }}>
                        <img src="/images/services/ecommerce.png" alt=""/>
                        <h3>{t("services.ecommerce.title")}</h3>
                        <p>
                           {t("services.ecommerce.description")}
                        </p>
                    </div>
                    <div className="sex   part nocomplete" onClick={() => {
                        navigate('/job_about')
                    }}>
                        <img src="/images/services/outsource.png" alt=""/>
                        <h3>{t("services.outsourcing.title")}</h3>
                        <p>
                           {t("services.outsourcing.description")}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Services;
