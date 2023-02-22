import React from "react";
import {Container} from "react-bootstrap";
import Message from "./Message";
import { useTranslation } from 'react-i18next';

function Time_Model() {


    const { t, i18n } = useTranslation();


    return (
        <div className="time">
            <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
                <img src="/images/Time_Model/Time_model.svg" alt="hosting"/>
                <h2>
                {t("time_model.title")}
                   
                </h2>
            </div>
            <Container className="row">
                <div className="col-lg-3 col part_time">
                    <h2> {t("time_model.part1.title")}</h2>
                    <img src="/images/Time_Model/price_model.svg"/>
                    <p>
                        {t("time_model.part1.description")}
                    </p>
                </div>
                <div className="col-lg-3 col part_time">
                    <h2>{t("time_model.part2.title")}</h2>
                    <img src="/images/Time_Model/time_model2.svg"/>
                    <p>
                    {t("time_model.part2.description")}
                        <ul>
                            <li>
                            {t("time_model.part2.list")}
                            </li>
                          
                        </ul>


                    </p>
                </div>
                <div className="col-lg-3 col part_time">
                    <h2>{t("time_model.part3.title")}</h2>
                    <img src="/images/Time_Model/team_model.svg"/>
                    <p>
                    {t("time_model.part3.description")}
                        <ul>
                        <li>
                            {t("time_model.part3.list")}
                            </li>
                        </ul>


                    </p>
                </div>
            </Container>
            <Message/>
        </div>
    );
}

export default Time_Model;
