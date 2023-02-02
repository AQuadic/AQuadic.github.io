import React from 'react'
import { useTranslation } from 'react-i18next';

function Imageheader() {
    const { t, i18n } = useTranslation();

    return (
        <div className='imageheader ' data-aos="zoom-in-up" data-aos-delay="50">
            <img src='/images/career.svg' alt='careers'/>
            <h2>{t("career.title")}</h2>
        </div>
    )
}

export default Imageheader