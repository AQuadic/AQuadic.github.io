import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap';

function  Portfolio(props) {
    const [nedd ,setneed]= useState("appplication");
   
    const data = props.data;
    const filterData = data.filter((data)=>  data.type===nedd)
    console.log(filterData)
    const btn1 = useRef();
    const btn2 = useRef();
 
  return (
    <div className='portfolio'> 
     <div className='imageheader ' data-aos="zoom-in-up" data-aos-delay="50">
            <img src='./images/projects/portfolio.svg' alt='careers'/>
            <h2>Portfolio</h2>
        </div>
        <Container>
            <div className='portfolio-btn'>
                <button ref={btn1} className="open" onClick={(e)=>{setneed("appplication"); btn2.current.classList.remove("open"); e.target.classList.add("open")} }>Applications</button>
                <button ref={btn2} onClick={(e)=>{setneed("websites");btn1.current.classList.remove("open"); e.target.classList.add("open")}}>Websites</button>

            </div>
        <div className='all-portfolio row'>
 
     { 

filterData.map((data)=>{return(
          
           <div
           key={data.id}
        className="project col-lg-3 col-md-5 col-sm-5 col-12"
        data-aos="fade-up"
        data-aos-delay="0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalLong"
     
      
      >
        <h3>{data.name.en}</h3>
        <p>{data.category}</p>
        <img src={data.main_image} alt="Oread" />
      </div>
         
        )})
      }
 

        </div>
        </Container>
    </div>
  )
}

export default Portfolio