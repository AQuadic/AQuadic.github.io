import React from "react";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";
import tech from "../../data/technologies.json";

function Technologies() {
    const {t,i18n} = useTranslation();
const navigate = useNavigate()
    return (
        <div className="technologies">
            <Container>
                <h2>{t("technologies.title")}</h2>
                <div className="alltechnologie">
                    {tech.map((item) => {
                        return (
                            <img
                                key={item.id}
                                src={item.logo}
                                alt={item.name[i18n.resolvedLanguage]}
                                data-aos="fade-up"
                                data-aos-delay="0"
                                onClick={()=>{navigate(`/portfolio?technology_id=${item.id}`)}}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Technologies;
