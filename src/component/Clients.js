import React from 'react'
import {Container} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import projects from '../data/projects.json'
function Clients() {
    const { t} = useTranslation();
    return (
        <Container className='clients'>
            <h2 data-aos="fade-up" data-aos-delay="0">{t("home.clients.title")}</h2>

            <div className='row'>
                {
                    projects.map((projectLogo)=>
                    <div data-aos="fade-up" data-aos-delay={projectLogo.id * 50} className='col-lg-2 col-md-3 col-sm-4 col-6'>
                    <img src={projectLogo.logo} alt={projectLogo.name}/>
                </div>
                    )
                }
              

            </div>
        </Container>
    )
}

export default Clients