import React from 'react'
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

function Jop_About() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            <div>
                <img src="/images/icons/arrow_left.svg" alt=""/>
            </div>,
        nextArrow:
            <div>
                <img src="/images/icons/arrow_right.svg" alt=""/>
            </div>,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                },
            },
        ]

    };
    return (
        <div className='jop-about'>
            <div className='imageheader ' data-aos="zoom-in-up" data-aos-delay="50">
                <img src='/images/header/header_part_5.svg' alt='careers'/>
                <h2>Product design &<br/>UI UX</h2>
            </div>
            <div className='plan'>
                <Container>
                    <h2>UI UX Process</h2>
                    <div className='parts-plan'>
                        <div className='part-plan'>
                            <h3>01</h3>
                            <div className='plan-about'>
                                <h4>Plan</h4>
                                <div className='plan-span'>
                                    <span></span>
                                    <span></span>

                                </div>
                                <ul>
                                    <li> Business analysis</li>
                                    <li> Documenting specifications</li>
                                    <li> Preparing wireframess</li>
                                    <li> Getting client approval</li>
                                </ul>
                            </div>
                        </div>
                        <div className='part-plan'>
                            <h3>02</h3>
                            <div className='plan-about'>
                                <h4>Design</h4>
                                <div className='plan-span'>
                                    <span></span>
                                    <span></span>

                                </div>
                                <ul>
                                    <li> Crafting app prototype</li>
                                    <li> Making changes</li>
                                    <li> Getting client approval</li>
                                    <li> Implementing feedback</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='our_creative'>
                <Container>
                    <div>
                        <h2 className='header-our'> Our Creative Designs</h2>
                        <Slider {...settings}>
                            <div>
                                <div className="pharm">

                                    <div className="row">
                                        <img src="/images/pharmacy/pharmacy.png"
                                             className="img-pharm col-lg-5 col-md-6 col-sm-9" data-aos="zoom-in"
                                             alt="Group"/>
                                        <div className="about-pharm col-lg-6 col-md-6">
                                            <div className="title">

                                                <img src="/images/pharmacy/logo.svg" alt="logo icon"/>
                                                <h1>Pharmacy</h1>
                                            </div>
                                            <p className="text">
                                                Pharmacy app for helping the clients and patients to get their
                                                staff without get out of the house, all that with delivery and
                                                shipping to their houses
                                            </p>
                                            <Link to="/target-project" className='view'>
                                                <p>View Details</p>
                                                <img src='/images/icons/arrow.svg' alt=''/>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="pharm">

                                    <div className="row">
                                        <img src="/images/pharmacy/pharmacy.png"
                                             className="img-pharm col-lg-5 col-md-6 col-sm-9" data-aos="zoom-in"
                                             alt="Group"/>
                                        <div className="about-pharm col-lg-6 col-md-6">
                                            <div className="title">

                                                <img src="/images/pharmacy/logo.svg" alt="logo icon"/>
                                                <h1>Pharmacy</h1>
                                            </div>
                                            <p className="text">
                                                Pharmacy app for helping the clients and patients to get their
                                                staff without get out of the house, all that with delivery and
                                                shipping to their houses
                                            </p>
                                            <Link to="/target-project" className='view'>
                                                <p>View Details</p>
                                                <img src='/images/icons/arrow.svg' alt=''/>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="pharm">

                                    <div className="row">
                                        <img src="/images/pharmacy/pharmacy.png"
                                             className="img-pharm col-lg-5 col-md-6 col-sm-9" data-aos="zoom-in"
                                             alt="Group"/>
                                        <div className="about-pharm col-lg-6 col-md-6">
                                            <div className="title">

                                                <img src="/images/pharmacy/logo.svg" alt="logo icon"/>
                                                <h1>Pharmacy</h1>
                                            </div>
                                            <p className="text">
                                                Pharmacy app for helping the clients and patients to get their
                                                staff without get out of the house, all that with delivery and
                                                shipping to their houses
                                            </p>
                                            <Link to="/target-project" className='view'>
                                                <p>View Details</p>
                                                <img src='/images/icons/arrow.svg' alt=''/>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="pharm">

                                    <div className="row">
                                        <img src="/images/pharmacy/pharmacy.png"
                                             className="img-pharm col-lg-5 col-md-6 col-sm-9" data-aos="zoom-in"
                                             alt="Group"/>
                                        <div className="about-pharm col-lg-6 col-md-6">
                                            <div className="title">

                                                <img src="/images/pharmacy/logo.svg" alt="logo icon"/>
                                                <h1>Pharmacy</h1>
                                            </div>
                                            <p className="text">
                                                Pharmacy app for helping the clients and patients to get their
                                                staff without get out of the house, all that with delivery and
                                                shipping to their houses
                                            </p>
                                            <Link to="/target-project" className='view'>
                                                <p>View Details</p>
                                                <img src='/images/icons/arrow.svg' alt=''/>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Slider>
                    </div>
                </Container>

            </div>
            <div className='jop-tech'>
                <Container>
                    <h2>UI UX Technologies</h2>
                    <div className='all-part'>
                        <div className='part1'>
                            <div className='tech'>
                                <h3>Design platforms</h3>

                                <div className='tech-img'>
                                    <ul>

                                        <li><img className='ti-1' src='/images/technologies/xd1.svg' alt=''/>
                                            <img className='ti-2' src='/images/technologies/xd2.svg' alt=''/>
                                        </li>
                                        <li><img className='ti-1' src='./images/technologies/photoshop1.svg' alt=''/>
                                            <img className='ti-2' src='./images/technologies/photoshop2.svg' alt=''/>
                                        </li>
                                        <li><img className='ti-1' src='./images/technologies/ai1.svg' alt=''/>
                                            <img className='ti-2' src='./images/technologies/ai2.svg' alt=''/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='tech'>
                                <h3>Design platforms</h3>
                                <div className='tech-img'>
                                    <ul>

                                        <li><img className='ti-1' src='./images/technologies/html1.svg' alt=''/>
                                            <img className='ti-2' src='./images/technologies/html2.svg' alt=''/>
                                        </li>
                                        <li><img className='ti-1' src='./images/technologies/css1.svg' alt=''/>
                                            <img className='ti-2' src='./images/technologies/css2.svg' alt=''/>
                                        </li>
                                        <li><img className='ti-1' src='./images/technologies/bootstrap1.svg' alt=''/>
                                            <img className='ti-2' src='./images/technologies/bootstrap2.svg' alt=''/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='part2'>
                            <img src='./images/technologies/xd1.svg' alt=''/>
                            <div className='about-tech'>
                                <h3>Adobe xd</h3>
                                <p>Adobe XD is a powerful and easy-to-use vector-based experience design platform that
                                    gives teams the tools they need to craft the world's best experiences
                                    collaboratively.</p>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Jop_About