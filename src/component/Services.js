import React from "react";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import  services  from '../data/services.json';
//className={ `${alli === "ahsmed" ? "yes": "no"  } gg`}
function Services() {
    const { t, i18n } = useTranslation();
let alli = "ahmed";
    const navigate = useNavigate()
    window.open = () => {
        window.scrollTo(250, 250)
    }
    return (
        <div className="services" id="services">
            <Container>
                <h2>{t("services.title")}</h2>
                <div className="  all-services" onClick={() => {
                    //navigate('/job_about')
                }}>
                 
                    {
services.map((service)=>{
    return (
        <div className={service.classes} onClick={()=>{navigate(`/job_about/${service.id}`)}}> 
        <img src={service.image} alt=""/>
                        <h3> {service.name[i18n.language]}</h3>
                        <p>
                        {service.description[i18n.language]}
                        </p>   
          </div>
    )
})
                    }
                </div>
            </Container>
        </div>
    );
}

export default Services;
