import React from 'react'
import CareerForm from './CareerForm'
import CareerHeader from './CareerHeader'
import CareerAdvantages from './CareerAdvantages'
import CareerJoin from './CareerJoin'
import CareerPositions from './CareerPositions'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {useTranslation} from "react-i18next"

function Career() {
    const {t} = useTranslation();

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>AQuadic | {t("career.title")}</title>
                    <link rel="canonical" href="https://aquadic.com/career"/>
                    <meta
                        name="description"
                        content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
                    />
                </Helmet>
                <CareerHeader/>
                <CareerJoin/>
                <CareerAdvantages/>
                <CareerPositions/>
                <CareerForm/>
            </HelmetProvider>
        </>
    )
}

export default Career