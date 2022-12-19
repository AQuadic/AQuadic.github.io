import React from 'react'
import { Container } from 'react-bootstrap'

function Technologies() {
    const imgnum =[27,28,29,30,31,32,33,34,35,36,37];
  return (
    <div className='technologies'>
        <Container >
            <h2>Technologies</h2>
            <div className='alltechnologie' >
{
    imgnum.map((num)=>{
    const sr =`%PUBLIC_URL%/images/image ${num}.svg`;
   
   
    return(
        <img  key={num} src={sr}  alt='technologie' data-aos="fade-up" data-aos-delay={num*6} />
    )
    })
}
</div>
        </Container>
    </div>
  )
}

export default Technologies