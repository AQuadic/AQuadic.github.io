import React from 'react'
import Forminfo from './Forminfo'
import Job from './Job'

function JobDetails() {
    return (
        <>
            <div className='imageheader ' data-aos="zoom-in-up" data-aos-delay="50">
                <img src='/images/career.svg' alt='careers'/>

                <div className='about-job'>
                    <h3>Junior Mobile Developer - Flutter</h3>
                    <div className='job_info'>
                        <p>Full Time</p>
                        <span>|</span>
                        <p><img src='/images/icons/map_off2.svg' alt=''/> Alexandria, Egypt.</p>
                    </div>
                </div>
            </div>
            <Job/>
            <Forminfo/>
        </>
    )
}

export default JobDetails