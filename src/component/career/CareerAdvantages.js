import React from 'react'
import {Container} from 'react-bootstrap'
import {useTranslation} from 'react-i18next'

function CareerAdvantages() {
    const {t} = useTranslation();

    return (
        <Container>
            <section className='advantages'>
                <h2>{t("career.advantages.title")}</h2>
                <div className='allcard row'>
                    <div className='cardd col-lg-3 col-md-5 col-12' data-aos="fade-right" data-aos-delay="00">
                        <img src='/images/benefits/environment.svg' alt='environment'/>
                        <h3>{t("career.advantages.environment.title")}</h3>
                        <p>{t("career.advantages.environment.description")}</p>
                    </div>

                    <div className='cardd col-lg-3 col-md-5 col-12' data-aos="fade-up" data-aos-delay="100">
                        <img src='/images/benefits/opportunities.svg' alt='opportunities'/>
                        <h3>{t("career.advantages.opportunities.title")}</h3>
                        <p>{t("career.advantages.opportunities.description")}</p>
                    </div>

                    <div className='cardd col-lg-3 col-md-5 col-12' data-aos="fade-left" data-aos-delay="00">
                        <img src='/images/benefits/technologies.svg' alt='technologies'/>
                        <h3>{t("career.advantages.technologies.title")}</h3>
                        <p>{t("career.advantages.technologies.description")}</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default CareerAdvantages