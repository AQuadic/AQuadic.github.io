import React,{useState} from "react";
import {Container} from "react-bootstrap";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import ProjectModal from "../portfolio/ProjectModal";
import team from '../../data/team.json'
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Person() {
const {t,i18n} = useTranslation();
const {id}=useParams()

const person = team.find((item)=> item.id === +id)

     //when click on project sent data this target project to projectModal
     const [currentProject, setCurrentProject] = useState(team[0].projects[0]);
    return (
        <div className="persone_info">
            <HelmetProvider>
                <Helmet>
                    <title>AQuadic | Person</title>
                    <link rel="canonical" href={`https://aquadic.com/person`}/>
                    <meta
                    name="description"
                    content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
                    />
                </Helmet>
                <Container>
                    <div className="about">
                        <div className="person ">
                            <div className={`person_img  ${person.class}` }>
                                <img src={person.image} alt={person.name[i18n.resolvedLanguage]}/>
                            </div>
                            <div className="person_name">
                                <h3>{person.name[i18n.resolvedLanguage]}</h3>
                                <p>{person.position[i18n.resolvedLanguage]}</p>
                            </div>
                        </div>
                        <h4>
                        {person.description[i18n.resolvedLanguage]}
                        </h4>
                    </div>
                    <h2>{t("team.worked_on")}</h2>
                    <div className='all-project row'>
                        <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="0"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalLong">
                            <h3>Oread</h3>
                            <p>Reading</p>
                            <img src='/images/projects/oread.svg' alt='Oread'/>
                        </div>

                        <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up"
                             data-aos-delay="50" d  data-bs-toggle="modal"
                             data-bs-target="#exampleModalLong">
                            <h3>MS Player</h3>
                            <p>Media</p>
                            <img src='/images/projects/msplayer.svg' alt='MS Player'/>
                        </div>


                    </div>
                </Container>
                <ProjectModal currentProject={currentProject}/>
            </HelmetProvider>
        </div>
    );
}

export default Person;
