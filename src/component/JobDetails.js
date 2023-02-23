import React from 'react'
import { useParams } from 'react-router-dom'
import Forminfo from './Forminfo'
import { useTranslation } from 'react-i18next';
import {Container} from 'react-bootstrap'
import jobs from '../data/jobs.json'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function JobDetails() {
    const { t ,i18n} = useTranslation();

    const {id} = useParams()
    const job = jobs.filter((job)=> job.id === +id)
    console.log(job)
    window.scrollTo(250, 250);
    return (
        <>
        <HelmetProvider>
          <Helmet>
        
        <title>Job Details</title>
        <link rel="canonical" href={`https://aquadic.com/career/${id}`}  />
        <meta
      name="description"
      content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
    />
      </Helmet>
            <div className='imageheader ' data-aos="zoom-in-up" data-aos-delay="50">
                <img src='/images/career.svg' alt='careers'/>

                <div className='about-job'>
                    <h3>{job[0].name[i18n.language]}</h3>
                    <div className='job_info'>
                        <p>{job[0].position[i18n.language]}</p>
                        <span>|</span>
                        <p><img src='/images/icons/map_off2.svg' alt=''/>  {job[0].location[i18n.language]}</p>
                    </div>
                </div>
            </div>

             <div className='job'>
            <Container>
                {
                    job[0].description[i18n.language].length ? 
                    <div className='part1'>
                    <h2>{t("career.job.description")}</h2>
                    <ul>
                        {
                             job[0].description[i18n.language].map((item)=>
                                <li>{item}</li>
                             )
                        }
                       
                    </ul>
                </div>
                    :null
                }
                {
                     job[0].requirements[i18n.language].length ? 
                      <div className='part2'>
                     <h2>{t("career.job.requirements")}</h2>
                     <ul>
                     {
                             job[0].requirements[i18n.language].map((item)=>
                                <li>{item}</li>
                             )
                        }
                        
                        
                     </ul>
                 </div> :null
                }

               
            </Container>
        </div>
            <Forminfo/>
            </HelmetProvider>
        </>
    )
}

export default JobDetails