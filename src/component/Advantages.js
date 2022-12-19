import React from 'react'
import {Container} from 'react-bootstrap'

function Advantages() {
    return (
        <Container>
            <section className='advantages'>
                <h2>Benefits & Advantages</h2>
                <div className='allcard row'>
                    <div className='cardd col-lg-3 col-md-5 col-12  ' data-aos="fade-right" data-aos-delay="00">
                        <img src='%PUBLIC_URL%/images/office 1.svg' alt=''/>
                        <h3>Relaxed Environment</h3>
                        <p>Have a relaxed working environment, cool offices, and an open-minded community</p>
                    </div>

                    <div className='cardd col-lg-3 col-md-5 col-12  ' data-aos="fade-up" data-aos-delay="100">
                        <img src='%PUBLIC_URL%/images/machine 1 (1).svg' alt=''/>
                        <h3>Learning opportunities</h3>
                        <p>Continuously learn, help others and improve personally and professionally</p>
                    </div>

                    <div className='cardd col-lg-3 col-md-5 col-12  ' data-aos="fade-left" data-aos-delay="00">
                        <img src='%PUBLIC_URL%/images/technology 1.svg' alt=''/>
                        <h3>Latest Technologies</h3>
                        <p>Collaborate on challenging projects Working with the latest technologies</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Advantages