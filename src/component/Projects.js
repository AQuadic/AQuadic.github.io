import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {counteraction} from "../data/data";
import { useTranslation } from 'react-i18next';
import Modal from "./Modal";

function Projects(props) {
    const { t, i18n } = useTranslation();
  
    const dispatch = useDispatch();
    const checkLang = window.document.dir;
    const qi = useSelector((state) => state.dir.value)
    const project = useSelector((state) => state.dir.project)
    console.log(project)
    useEffect(() => {
        setLang(qi.toLowerCase())
    }, [qi])

    const all_data = props.all_data;
    console.log(all_data)
    const [currentProject, setCurrentProject] = useState(all_data[0])

    const [lang, setLang] = useState()
    const [imageProject, setImageProject] = useState("")

    console.log(currentProject)
    console.log(all_data[0].name[lang])
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
