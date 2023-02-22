import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Modal from "./Modal";

function Projects(props) {
    const { t, i18n } = useTranslation();
  
    
    
    
 

    const all_data = props.all_data;
  
    const [currentProject, setCurrentProject] = useState(all_data[0])

 

    console.log(currentProject)
  
    return (
        <div className="projects">
            <Container>
                <div className="head">
                    <h2>{t("portfolio.title")}</h2>
                    <Link to="/portfolio">
                        <p>{t("portfolio.see_all")}</p>
                        <img src="/images/icons/see_all.svg" alt=""/>
                    </ Link>
                </div>

                <div className="all-project row">
                    {
                        all_data.slice(0,6).map((data) => {
                            return (
                                <div
                                    key={data.id}
                                    className="project col-lg-3 col-md-5 col-sm-5 col-12"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalLong"
                                    onClick={() => {
                                        setCurrentProject(data);
                                      
                                    }}
                                >
                                    <h3>{data.name[i18n.language]}</h3>
                                    <p>{data.category.name[i18n.language]}</p>
                                    <img src={data.main_image} alt={data.name[i18n.language]}/>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
            <Modal currentProject ={currentProject}/>
           
        </div>
    );
}

export default Projects;
