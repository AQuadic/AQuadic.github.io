import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer'>
        <Container>
            <h3>© AQuadic Software, 2019-2022.</h3>
            <div >
                <div className='icon-soch faceboock' > <img src='./images/facebook (6) 1.svg' alt=''/>
                <img src='./images/facebook (7) 1.svg' alt=''/>
                </div>
                <div className='icon-soch linkedin' > <img src='./images/linkedin (1) 1.svg' alt=''/> 
                <img src='./images/linkedin 1.svg' alt=''/> 
                </div>
                <div className='icon-soch behance' > <img src='./images/behance 1.svg' alt=''/>
                <img src='./images/behance (1) 1.svg' alt=''/>
                </div>
            </div>
            <p>All rights reserved.</p>
        </Container>
    </div>
  )
}

export default Footer