import React from "react";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import jobs from '../../data/jobs.json'

function CareerPositions() {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="positions">
            <Container>
                <h2>{t("career.positions.title")}</h2>
                {
                    jobs.length ?
                        jobs.map((job) =>
                            <div className="job">
                                <div className="about-job">
                                    <h3>{job.name[i18n.language]}</h3>
                                    <div className="job_info">
                                        <p>{job.position[i18n.language]}</p>
                                        <span>|</span>
                                        <p>
                                            <img src="/images/icons/map_off.svg" alt=""/>
                                            {job.location[i18n.language]}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="btn-page"
                                    onClick={() => {
                                        navigate(`${job.id}`);
                                    }}
                                >
                                    {t("career.positions.learn_more")}
                                </button>
                            </div>
                        )
                        : <h3>  {t("career.positions.no_job")}</h3>
                }
            </Container>
        </div>
    );
}

export default CareerPositions;
