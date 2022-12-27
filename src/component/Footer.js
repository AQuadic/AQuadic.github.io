import React from 'react'
import {Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    return (
        <div className='footer'>
            <Container>
                <h3>© AQuadic Software, 2019-2022.</h3>
                <div>
                    <a className='icon-soch faceboock' href='https://www.facebook.com/aquadicsoftware' target="_blank"
                       aria-label="a.link_social">
                        <img src='./images/icons/facebook_off.svg' alt=''/>
                        <img src='./images/icons/facebook_on.svg' alt=''/>
                    </a>

                    <a className='icon-soch linkedin' href='https://www.linkedin.com/company/aquadic' target="_blank"
                       aria-label="a.link_social">
                        <img src='./images/icons/linkedin_off.svg' alt=''/>
                        <img src='./images/icons/linkedin_on.svg' alt=''/>
                    </a>

                    <a className='icon-soch behance' href='https://www.behance.net/aquadic' target="_blank"
                       aria-label="a.link_social">
                        <img src='./images/icons/behance_off.svg' alt=''/>
                        <img src='./images/icons/behance_on.svg' alt=''/>
                    </a>
                    <a className='icon-soch ' href='https://instagram.com/aquadicsoftware' target="_blank"
                       aria-label="a.link_social">
                        <img src='./images/icons/instagram_off.svg' alt=''/>
                        <img src='./images/icons/instagram_on.svg' alt=''/>
                    </a>
                    <a className='icon-soch ' href='https://twitter.com/AquadicSoftware' target="_blank"
                       aria-label="a.link_social">
                        <img src='./images/icons/twitter_off.svg' alt=''/>
                        <img src='./images/icons/twitter_on.svg' alt=''/>
                    </a>
                </div>
                <p>All rights reserved.</p>
            </Container>
        </div>
    )
}

export default Footer