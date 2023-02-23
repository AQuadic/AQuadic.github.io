import React from "react";
import { Container } from "react-bootstrap";
import Message from "./Message";
import { useTranslation } from "react-i18next";
import pricing from '../data/pricing.json'
function TimeModel() {
  const { t , i18n } = useTranslation();

  return (
    <div className="time">
      <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
        <img src="/images/Time_Model/Time_model.svg" alt="hosting" />
        <h2>{t("time_model.title")}</h2>
      </div>
      <Container className="row">
        {
          pricing.map((item )=> {
            return (
              <div className="col-lg-3 col part_time">
              <h2>{item.name[i18n.language]}</h2>
              <img src={item.image} alt={item.name.en} />
              <p>
                {item.description[i18n.language]}
                {
                  item.features[i18n.language] ? 
                   <ul>
                  {
                    item.features[i18n.language].map((features)=> {
                      return (
                        <li>{features}</li>
                      )
                    })
                  }
                </ul> 
                :null
                }
               
              </p>
            </div>
            )
          }
          
          )
        }
      
      </Container>
      <Message />
    </div>
  );
}

export default TimeModel;
