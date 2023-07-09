import React from 'react'
import {Container} from 'react-bootstrap'
import {useTranslation} from 'react-i18next'

function Business() {
    const {t} = useTranslation();

    return (
        <section className='business'>
            <Container>
                <div className='about-business'>
                    <h1>{t("home.heading.part1")} <span>{t("home.heading.red")}</span> {t("home.heading.part2")}</h1>
                    <p>{t("home.heading.description")} </p>
                </div>
            </Container>
        </section>
    )
}

export default Business