import React, {useState} from 'react'
import {Container} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import all_data from '../data/projects.json'
import ProjectModal from './ProjectModal';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
              <HelmetProvider>
<Helmet>
        
        <title>AQuadic | portfolio</title>
        <link rel="canonical" href={`https://aquadic.com/portfolio`}  />
        <meta
      name="description"
      content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
    />
      </Helmet>
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
            <ProjectModal currentProject ={currentProject}/>
            </HelmetProvider>
        </div>
    )
}

export default Portfolio