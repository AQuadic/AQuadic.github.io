import React from 'react'
import {Container} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

function Join() {
    const { t} = useTranslation();

    return (
        <div className='join'>
            <Container>
                <h2>{t("career.join.title")}</h2>
                <p>
                {t("career.join.description")}
                </p>
            </Container>
        </div>
    )
}

export default Join