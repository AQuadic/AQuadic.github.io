import React from 'react'
import {Container} from 'react-bootstrap'

function Technologies() {
    const imgnum = ['android', 'angularjs', 'apple', 'aws', 'go', 'java', 'nodejs', 'python', 'reactjs', 'technology_1'];
    return (
        <div className='technologies'>
            <Container>
                <h2>Technologies</h2>
                <div className='alltechnologie'>
                    {
                        imgnum.map((num) => {
                            const sr = `./images/technologies/${num}.svg`;
                            return (
                                <img key={num} src={sr} alt='technologie' data-aos="fade-up" data-aos-delay="0"/>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Technologies