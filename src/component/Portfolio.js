import React, {useRef, useState} from 'react'
import {Container} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
import all_data  from '../data/projects.json'

function Portfolio(props) {
    const {t, i18n} = useTranslation();

    const [nedd, setneed, lang] = useState("appplication");

    const data = props.data;
    const filterData = data.filter((data) => data.type === nedd)
    console.log(filterData)
    const btn1 = useRef();
    const btn2 = useRef();
    const [currentProject, setCurrentProject] = useState(all_data[0])
    return (
        <div className='portfolio'>
            <div className='imageheader' data-aos="zoom-in-up" data-aos-delay="50">
                <img src='/images/projects/portfolio.svg' alt='careers'/>
                <h2>{t('portfolio.title')}</h2>
            </div>
            <Container>
                <div className='portfolio-btn'>
                    <button ref={btn1} className="open" onClick={(e) => {
                        setneed("appplication");
                        btn2.current.classList.remove("open");
                        e.target.classList.add("open")
                    }}>{t('portfolio.applications')}
                    </button>
                    <button ref={btn2} onClick={(e) => {
                        setneed("websites");
                        btn1.current.classList.remove("open");
                        e.target.classList.add("open")
                    }}>{t('portfolio.websites')}
                    </button>
                </div>

                <div className='all-portfolio row'>
                    {
                        filterData.map((data) => {
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
    )
}

export default Portfolio