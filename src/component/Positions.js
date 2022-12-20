import React from 'react'
import {Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Positions() {
    const navigate = useNavigate()
    return (
        <div className='positions'>
            <Container>
                <h2>Open Positions</h2>
                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Mobile Developer - Flutter</h3>
                        <div className='.job_info'>
                            <p>Full Time</p>
                            <span>|</span>
                            <p><img src='./images/icons/map_off.svg' alt=''/> Alexandria, Egypt.</p>
                        </div>
                    </div>
                    <button className='btn-page' onClick={()=>{navigate("/job")}}  >Learn More</button>
                </div>

                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Backend Developer - Laravel</h3>
                        <div>
                            <p>Remotely</p>
                            <span>|</span>
                            <p><img src='./images/icons/map_off.svg' alt=''/> 🌍.</p>
                        </div>
                    </div>
                    <button className='btn-page' onClick={()=>{navigate("/job")}} >Learn More</button>
                </div>

                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Ui/Ux Designer</h3>
                        <div>
                            <p>Full Time</p>
                            <span>|</span>
                            <p><img src='./images/icons/map_off.svg' alt=''/> Alexandria, Egypt.</p>
                        </div>
                    </div>
                    <button className='btn-page'  onClick={()=>{navigate("/job")}}>Learn More</button>
                </div>

                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Tester</h3>
                        <div>
                            <p>Part Time</p>
                            <span>|</span>
                            <p><img src='./images/icons/map_off.svg' alt=''/> Alexandria, Egypt.</p>
                        </div>
                    </div>
                    <button className='btn-page' onClick={()=>{navigate("/job")}} >Learn More</button>
                </div>

                <div className='job'>
                    <div className='about-job'>
                        <h3>Junior Team lead</h3>
                        <div>
                            <p>Full Time</p>
                            <span>|</span>
                            <p><img src='./images/icons/map_off.svg' alt=''/> Alexandria, Egypt.</p>
                        </div>
                    </div>
                    <button className='btn-page'  onClick={()=>{navigate("/job")}}>Learn More</button>
                </div>
            </Container>
        </div>
    )
}

export default Positions