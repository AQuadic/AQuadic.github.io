import React from "react";
import {Container} from "react-bootstrap";
import Message from "./Message";
import {useTranslation} from "react-i18next";
import pricing from '../data/pricing.json'
import {Helmet, HelmetProvider} from 'react-helmet-async';

function Pricing() {
    const {t, i18n} = useTranslation();

    return (
        <div className="time">
            <HelmetProvider>
                <Helmet>

                    <title>AQuadic | {t("time_model.title")}</title>
                    <link rel="canonical" href={`https://aquadic.com/time_model`}/>
                    <meta
                        name="description"
                        content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
                    />
                </Helmet>
                <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
                    <img src="/images/Time_Model/Time_model.svg" alt="hosting"/>
                    <h2>{t("time_model.title")}</h2>
                </div>
                <Container className="row">
                    {
                        pricing.map((item) => {
                                return (
                                    <div className="col-lg-3 col part_time">
                                        <h2>{item.name[i18n.language]}</h2>
                                        <img src={item.image} alt={item.name.en}/>
                                        <p>
                                            {item.description[i18n.language]}
                                            {
                                                item.features[i18n.language] ?
                                                    <ul>
                                                        {
                                                            item.features[i18n.language].map((features) => {
                                                                return (
                                                                    <li>{features}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    : null
                                            }

                                        </p>
                                    </div>
                                )
                            }
                        )
                    }

                </Container>
                <Message/>
            </HelmetProvider>
        </div>
    );
}

export default Pricing;
