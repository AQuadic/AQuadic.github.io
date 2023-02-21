import React, {useState} from 'react'
import {Container} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import all_data from '../data/projects.json'

function Portfolio() {
    // Language.
    const {t, i18n} = useTranslation();

    // Active Project.
    const [currentProject, setCurrentProject] = useState(all_data[0])

    // Filter Projects.
    const [activeId, setActiveId] = useState(1);
    let projects = all_data.filter(proj => proj.services.filter(ser => ser.id === activeId).length);

    return (
        <div className='portfolio'>
            <div className='imageheader' data-aos="zoom-in-up" data-aos-delay="50">
                <img src='/images/projects/portfolio.svg' alt='careers'/>
                <h2>{t('portfolio.title')}</h2>
            </div>
            <Container>
                <div className='portfolio-btn'>
                    <button className={activeId === 1 ? 'open' : ''} onClick={() => setActiveId(1)}>
                        {t('portfolio.applications')}
                    </button>
                    <button className={activeId === 2 ? 'open' : ''} onClick={() => setActiveId(2)}>
                        {t('portfolio.websites')}
                    </button>
                </div>

                <div className='all-portfolio row'>
                    {
                        projects.map((proj) => {
                            return (
                                <div
                                    key={proj.id}
                                    className="project col-lg-3 col-md-5 col-sm-5 col-12"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalLong"
                                    onClick={() => setCurrentProject(proj)}
                                >
                                    <h3>{proj.name[i18n.language]}</h3>
                                    <p>{proj.category.name[i18n.language]}</p>
                                    <img src={proj.main_image} alt={proj.name[i18n.language]}/>
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

                        <div className="modal-body" style={{background: currentProject.primary_color + 38,}}>
                            <div className="modal_img">
                                <img src={currentProject.main_image} alt={currentProject.name[i18n.language]}/>
                                <img className="back_img" src={currentProject.background_image} alt="bk_image"/>
                            </div>

                            <div className="modal_title">
                                <h2>{currentProject.name[i18n.language]}</h2>
                                <p>{currentProject.description[i18n.language]}</p>

                                <div data-bs-dismiss="modal" className="close view">
                                    <Link to={`${currentProject.id}`} className="view">
                                        <p>{t("portfolio.view_details")} </p>
                                        <img src="/images/icons/see_all.svg" alt=""/>
                                    </ Link>
                                </div>

                                <div className="modal_app">
                                    {
                                        Object.keys(currentProject.links).map(function (key) {
                                            const link = currentProject.links[key];
                                            const img = `/images/apps/${key}.svg`;
                                            return (
                                                link
                                                    ? <a target={"_blank"} href={link} rel="noreferrer">
                                                        <img src={img} alt={key}/>
                                                    </a>
                                                    : null
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio