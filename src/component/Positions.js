import React from 'react'
import { Container } from 'react-bootstrap'

function Positions() {
  return (
    <div className='positions'>
        <Container>
        <h2>Open Positions</h2>
        <div className='job'>
            <div className='about-job'>
            <h3>Junior Mobile Developer - Flutter</h3>
            <div>
                <p>Full Time</p>
                <span>|</span>
                <p><img src='./images/map (1) 1.svg' alt=''/> Alexandria, Egypt.</p>
            </div>
            </div>
           <button>Learn More</button>

        </div>
        </Container>
    </div>
  )
}

export default Positions