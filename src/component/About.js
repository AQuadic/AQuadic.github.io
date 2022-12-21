import React from 'react'
import {Container} from 'react-bootstrap'

function About() {
    return (
        <div className='about' id='about'>
            <Container>
                <img src='./images/header/about_us.png' alt=''/>
                <div className='about-about'>
                    <h2>About Us</h2>
                    <h4>
                        Aquadic is a design and digital product development company. We create beautiful and functional
                        web platforms, apps, and custom software solutions. we build projects for companies in different
                        locations, and we always open to any business relationship.
                    </h4>
                </div>
            </Container>
        </div>
    )
}

export default About