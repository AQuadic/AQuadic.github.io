import React from 'react'
import {Container} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
function About() {
    const { t } = useTranslation();
    return (
        <div className='about' id='about'>
            <Container>
                <img src='/images/header/about_us.png' alt=''/>
                <div className='about-about'>
                    <h2>{t("home.about.title")}</h2>
                    <h4>
                    {t("home.about.description")}
                    </h4>
                </div>
            </Container>
        </div>
    )
}

export default About