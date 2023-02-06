import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {counteraction} from "../data/data";
import { useTranslation } from 'react-i18next';

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
                        all_data.map((data) => {
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

            <div
                className="modal fade project_modal"
                id="exampleModalLong"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <img aria-hidden="true" src="/images/icons/model_x.svg" alt="close"/>
                            </button>
                        </div>

                        <div className="modal-body" style={{ background: currentProject.primary_color+38,}}>
                            <div className="modal_img">
                                <img src={currentProject.main_image} alt={currentProject.name[i18n.language]}/>
                                <img className="back_img" src={currentProject.background_image} alt="bk_image"/>
                            </div>

                            <div className="modal_title">
                                <h2>{currentProject.name[i18n.language]}</h2>
                                <p>{currentProject.description[i18n.language]}</p>

                                <div data-bs-dismiss="modal" className="close view">
                                    <Link to={`portfolio/${currentProject.id}`} className="view">
                                        <p>{t("portfolio.view_details")} </p>
                                        <img src="/images/icons/see_all.svg" alt=""/>
                                    </ Link>
                                </div>

                                <div className="modal_app">
                                    {
                                        Object.keys(currentProject.links).map(function (key) {
                                            const link = currentProject.links[key];
                                            const img = `/images/apps/${key}.svg`;
                                            return (link ? <a target={"_blank"} href={link}><img src={img} alt={key}/></a> : null)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
