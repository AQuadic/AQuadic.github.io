import React from 'react'
import {Container} from 'react-bootstrap'
import Animation1 from './Animation1'

function Business() {
    return (
        <section className='business'>
            <Container>
                <div className='about-business'>
                    <h1>We help <span>Business</span> in their<br/>design & development journey.</h1>
                    <p>
                        Design and digital product development company. We create beautiful and functional web
                        platforms, apps and custom software solutions.
                    </p>
                </div>
            </Container>
            <Animation1/>
        </section>

    )
}

export default Business