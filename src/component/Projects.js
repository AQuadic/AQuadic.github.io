import React from 'react'
import {Container} from 'react-bootstrap'

function Projects() {
    return (
        <div className='projects'>
            <Container>
                <h2>Our Latest Creative Projects</h2>
                <div className='all-project row'>
                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="0">
                        <h3>Oread</h3>
                        <p>Reading</p>
                        <img src='./images/projects/oread.svg' alt='Oread'/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="50">
                        <h3>MS Player</h3>
                        <p>Media</p>
                        <img src='./images/projects/msplayer.svg' alt='MS Player'/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="100">
                        <h3>Optimalimo</h3>
                        <p>Transportation, Booking</p>
                        <img src='./images/projects/optimalimo.svg' alt='Optimalimo'/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="150">
                        <h3>Lokta</h3>
                        <p>Ecommerce</p>
                        <img src='https://i.ibb.co/wMyrXth/lokta.png' alt='Lokta'/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="200">
                        <h3>Hakam Motors</h3>
                        <p>Ecommerce</p>
                        <img src='https://i.ibb.co/NNVZkMZ/hakam.png' alt='Hakam Motors'/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="250">
                        <h3>Marvelous Emotion</h3>
                        <p>Ecommerce</p>
                        <img src='https://i.ibb.co/NssmzqT/marvelous.png' alt='Marvelous Emotion'/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="300">
                        <h3>Bookly</h3>
                        <p>Booking</p>
                        <img src='https://i.ibb.co/hWMj9J1/bookly.png' alt=''/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="350">
                        <h3>TrackCo</h3>
                        <p>Transportations</p>
                        <img src='https://i.ibb.co/CsD0t34/tracko.png' alt=''/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="400">
                        <h3>Quraan</h3>
                        <p>Religion, Books</p>
                        <img src='https://i.ibb.co/kgRBNb1/quraan.png' alt=''/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Projects