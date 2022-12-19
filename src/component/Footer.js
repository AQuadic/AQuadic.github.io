import React from 'react'
import {Container} from 'react-bootstrap'

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <h3>© AQuadic Software, 2019-2022.</h3>
                <div>
                    <div className='icon-soch faceboock'>
                        <img src='./images/icons/facebook_off.svg' alt=''/>
                        <img src='./images/icons/facebook_on.svg' alt=''/>
                    </div>

                    <div className='icon-soch linkedin'>
                        <img src='./images/icons/linkedin_off.svg' alt=''/>
                        <img src='./images/icons/linkedin_on.svg' alt=''/>
                    </div>

                    <div className='icon-soch behance'>
                        <img src='./images/icons/behance_off.svg' alt=''/>
                        <img src='./images/icons/behance_on.svg' alt=''/>
                    </div>
                </div>
                <p>All rights reserved.</p>
            </Container>
        </div>
    )
}

export default Footer