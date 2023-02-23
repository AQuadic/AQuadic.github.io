import React from "react";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import services from "../../data/services.json";

function Services() {
    const {t, i18n} = useTranslation();

    const navigate = useNavigate();
    window.open = () => {
        window.scrollTo(250, 250);
    };

    return (
        <div className="services" id="services">
            <Container>
                <h2>{t("services.title")}</h2>
                <div className="  all-services" onClick={() => {
                }}>
                    {services.map((service) => {
                        return (
                            <div
                                key={service.id}
                                className={service.classes}
                                onClick={() => {
                                    navigate(`/service/${service.id}`);
                                }}
                            >
                                <img src={service.image} alt=""/>
                                <h3> {service.name[i18n.resolvedLanguage]}</h3>
                                <p>{service.description[i18n.resolvedLanguage]}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Services;
