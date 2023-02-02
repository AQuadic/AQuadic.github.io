import React, {useRef, useState} from 'react'
import {Container} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Portfolio(props) {
    const { t, i18n } = useTranslation();

    const [nedd, setneed, lang] = useState("appplication");

    const data = props.data;
    const filterData = data.filter((data) => data.type === nedd)
    console.log(filterData)
    const btn1 = useRef();
    const btn2 = useRef();

    return (
        <div className='portfolio'>
            <div className='imageheader' data-aos="zoom-in-up" data-aos-delay="50">
                <img src='/images/projects/portfolio.svg' alt='careers'/>
                <h2>Portfolio</h2>
            </div>
            <Container>
                <div className='portfolio-btn'>
                    <button ref={btn1} className="open" onClick={(e) => {
                        setneed("appplication");
                        btn2.current.classList.remove("open");
                        e.target.classList.add("open")
                    }}>Applications
                    </button>
                    <button ref={btn2} onClick={(e) => {
                        setneed("websites");
                        btn1.current.classList.remove("open");
                        e.target.classList.add("open")
                    }}>Websites
                    </button>
                </div>

                <div className='all-portfolio row'>
                    {
                        filterData.map((data) => {
                            return (
                                <div
                                    key={data.id}
                                    className="project col-lg-3 col-md-5 col-sm-5 col-12"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalLong"
                                >
                                    <h3>{data.name[i18n.language]}</h3>
                                    <p>{data.category.name[i18n.language]}</p>
                                    <img src={data.main_image} alt={data.name[i18n.language]}/>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Portfolio