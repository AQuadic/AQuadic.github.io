import React, { useState } from 'react'
import {Container} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import Slider from "react-slick";
import projects from '../data/projects.json'
import services from '../data/services.json'
function Jop_About() {
    const params = useParams();
    const [tech ,settech]= useState();
   
    console.log(tech)
    console.log(params)
    console.log(projects)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            <div>
                <img src="/images/icons/arrow_left.svg" alt=""/>
            </div>,
        nextArrow:
            <div>
                <img src="/images/icons/arrow_right.svg" alt=""/>
            </div>,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                },
            },
        ]

    };


    const type = [];

    const mob_data = ()=>{  projects.map((item)=>  item.services.map((id) =>{ 
        if(id.id === +params.id ){
            type.push(id)
    
    } }) ) }
    
        
        mob_data()
        console.log(type)
const current_services = services.filter((item)=> {return item.id === +params.id})
console.log(current_services)
 

const  tech_info = current_services[0].technologies.filter((item)=> {
        return item.id === tech
    })
    console.log(tech_info) 

    return (
        <div className='jop-about'>
            <div className='imageheader ' data-aos="zoom-in-up" data-aos-delay="50">
                <img src='/images/header/header_part_5.svg' alt='careers'/>
                <h2>{current_services[0].name.en}</h2>
            </div>
            <div className='plan'>
                <Container>
                    <h2>UI UX Process</h2>
                    <div className='parts-plan'>
                        <div className='part-plan'>
                            <h3>01</h3>
                            <div className='plan-about'>
                                <h4>Plan</h4>
                                <div className='plan-span'>
                                    <span></span>
                                    <span></span>

                                </div>
                                <ul>
                                    <li> Business analysis</li>
                                    <li> Documenting specifications</li>
                                    <li> Preparing wireframess</li>
                                    <li> Getting client approval</li>
                                </ul>
                            </div>
                        </div>
                        <div className='part-plan'>
                            <h3>02</h3>
                            <div className='plan-about'>
                                <h4>Design</h4>
                                <div className='plan-span'>
                                    <span></span>
                                    <span></span>

                                </div>
                                <ul>
                                    <li> Crafting app prototype</li>
                                    <li> Making changes</li>
                                    <li> Getting client approval</li>
                                    <li> Implementing feedback</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {
                type.length >0 ?   <div className='our_creative'>
                <Container>
                    <div>
                        <h2 className='header-our'> Our Creative Designs</h2>
                        <Slider {...settings}>
                            
{
    type.map((item)=>{
        return (
            <div key={item.id}>
        <div className="pharm" >

        <div className="row">
            <img src={item.image}
                 className="img-pharm col-lg-5 col-md-6 col-sm-9" data-aos="zoom-in"
                 alt="Group"/>
            <div className="about-pharm col-lg-6 col-md-6">
                <div className="title">

                    <img src="/images/projects/pharmacy/logo.svg" alt="logo icon"/>
                    <h1>{item.name.ar}</h1>
                </div>
                <p className="text">
                {item.description.en}  
                </p>
                <Link to="/portfolio/target-project" className='view'>
                    <p>View Details</p>
                    <img src='/images/icons/arrow.svg' alt=''/>
                </Link>
            </div>
        </div>

    </div>
    </div>
        )
    })
}
                                
                             
                        </Slider>
                    </div>
                </Container>

            </div> : null
            }
          
            <div className='jop-tech'>
                <Container>
                    <h2>UI UX Technologies</h2>
                    <div className='all-part'>
                        <div className='part1'>
                            <div className='tech'>
                                <h3>Design platforms</h3>

                                <div className='tech-img'>
                                    <ul>

                                        <li onClick={()=>{}}><img className='ti-1' src='/images/technologies/xd1.svg' alt=''/>
                                            <img className='ti-2' src='/images/technologies/xd2.svg' alt=''/>
                                        </li>
                                        <li onClick={()=>{}}><img className='ti-1' src='/images/technologies/photoshop1.svg' alt=''/>
                                            <img className='ti-2' src='/images/technologies/photoshop2.svg' alt=''/>
                                        </li>
                                        <li onClick={()=>{}}><img className='ti-1' src='/images/technologies/ai1.svg' alt=''/>
                                            <img className='ti-2' src='/images/technologies/ai2.svg' alt=''/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='tech'>
                                <h3>Design platforms</h3>
                                <div className='tech-img'>
                                    <ul>
{
   current_services[0].technologies.map((item)=>{
    return (
        <li onClick={()=>{settech(item.id)}}>
            <img src={item.logo} alt=''/>
        </li>
    )
   })
}
                                      
                                    </ul>
                                </div>
                            </div>

                        </div>
                        {
                        tech_info.length >0?<div className='part2'>
                        <img src={tech_info[0].logo} alt=''/>
                        <div className='about-tech'>
                            <h3>{tech_info[0].name.en}</h3>
                            <p>{tech_info[0].description.en}</p>
                        </div>
                    </div> :<div className='part2'>
                            <img src='/images/technologies/xd1.svg' alt=''/>
                            <div className='about-tech'>
                                <h3>Adobe xd</h3>
                                <p>Adobe XD is a powerful and easy-to-use vector-based experience design platform that
                                    gives teams the tools they need to craft the world's best experiences
                                    collaboratively.</p>
                            </div>
                        </div>
                       }
                        
                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Jop_About