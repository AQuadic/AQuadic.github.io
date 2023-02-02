import React from 'react'
import {Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Positions() {
    const { t, i18n } = useTranslation();

    const navigate = useNavigate()

    return (
        <div className='positions'>
            <Container>
                <h2>{t("career.positions.title")}</h2>
                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Mobile Developer - Flutter</h3>
                        <div className='job_info'>
                            <p>Full Time</p>
                            <span>|</span>
                            <p><img src='/images/icons/map_off.svg' alt=''/> Alexandria, Egypt.</p>
                        </div>
                    </div>
                    <button className='btn-page' onClick={() => {
                        navigate("/job")
                    }}>{t("career.positions.learn_more")}
                    </button>
                </div>

                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Backend Developer - Laravel</h3>
                        <div className='job_info'>
                            <p>Remotely</p>
                            <span>|</span>
                            <p><img src='/images/icons/map_off.svg' alt=''/> 🌍.</p>
                        </div>
                    </div>
                    <button className='btn-page' onClick={() => {
                        navigate("/job")
                    }}>{t("career.positions.learn_more")}
                    </button>
                </div>

                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Ui/Ux Designer</h3>
                        <div className='job_info'>
                            <p>Full Time</p>
                            <span>|</span>
                            <p><img src='/images/icons/map_off.svg' alt=''/> Alexandria, Egypt.</p>
                        </div>
                    </div>
                    <button className='btn-page' onClick={() => {
                        navigate("/job")
                    }}>{t("career.positions.learn_more")}
                    </button>
                </div>

                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Tester</h3>
                        <div className='job_info'>
                            <p>Part Time</p>
                            <span>|</span>
                            <p><img src='/images/icons/map_off.svg' alt=''/> Alexandria, Egypt.</p>
                        </div>
                    </div>
                    <button className='btn-page' onClick={() => {
                        navigate("/job")
                    }}>{t("career.positions.learn_more")}
                    </button>
                </div>

                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Team lead</h3>
                        <div className='job_info'>
                            <p>Full Time</p>
                            <span>|</span>
                            <p><img src='/images/icons/map_off.svg' alt=''/> Alexandria, Egypt.</p>
                        </div>
                    </div>
                    <button className='btn-page' onClick={() => {
                        navigate("/job")
                    }}>{t("career.positions.learn_more")}
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Positions