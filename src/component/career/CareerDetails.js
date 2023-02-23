import React from 'react'
import {useParams} from 'react-router-dom'
import CareerForm from './CareerForm'
import {useTranslation} from 'react-i18next'
import {Container} from 'react-bootstrap'
import jobs from '../../data/jobs.json'
import {Helmet, HelmetProvider} from 'react-helmet-async'

function CareerDetails() {
    const {t, i18n} = useTranslation();
    const {id} = useParams()
    const job = jobs.find((job) => job.id === +id)
    window.scrollTo(250, 250);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>AQuadic | {job.name[i18n.resolvedLanguage]}</title>
                    <link rel="canonical" href={`https://aquadic.com/career/${id}`}/>
                    <meta
                        name="description"
                        content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
                    />
                </Helmet>

                <div className='imageheader' data-aos="zoom-in-up" data-aos-delay="50">
                    <img src='/images/career.svg' alt='careers'/>
                    <div className='about-job'>
                        <h3>{job.name[i18n.resolvedLanguage]}</h3>
                        <div className='job_info'>
                            <p>{job.position[i18n.resolvedLanguage]}</p>
                            <span>|</span>
                            <p><img src='/images/icons/map_off2.svg' alt=''/> {job.location[i18n.resolvedLanguage]}</p>
                        </div>
                    </div>
                </div>

                <div className='job'>
                    <Container>
                        {
                            job.description[i18n.resolvedLanguage].length ?
                                <div className='part1'>
                                    <h2>{t("career.job.description")}</h2>
                                    <ul>
                                        {
                                            job.description[i18n.resolvedLanguage].map((item) =>
                                                <li>{item}</li>
                                            )
                                        }

                                    </ul>
                                </div>
                                : null
                        }
                        {
                            job.requirements[i18n.resolvedLanguage].length ?
                                <div className='part2'>
                                    <h2>{t("career.job.requirements")}</h2>
                                    <ul>
                                        {
                                            job.requirements[i18n.resolvedLanguage].map((item) =>
                                                <li>{item}</li>
                                            )
                                        }
                                    </ul>
                                </div> : null
                        }
                    </Container>
                </div>
                <CareerForm/>
            </HelmetProvider>
        </>
    )
}

export default CareerDetails