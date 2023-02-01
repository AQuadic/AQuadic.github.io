import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
function Target_Project(props) {
    const data =props.data;
    var settings = {
      className: "center",
      prevArrow:
          <div>
              <img src="./images/icons/arrow_left.svg" alt=""/>
          </div>,
      nextArrow:
          <div>
              <img src="./images/icons/arrow_right.svg" alt=""/>
          </div>
      ,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 4,
      responsive: [
          {
              breakpoint: 1400,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
              },
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
              },
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 2,
              },
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1.7,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 540,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  };
  const btn1 = useRef()
  const btn2 = useRef()

  return (
    <div className='target-project'>
        <Container>
        {/* pharm */}
        <div className="pharm">
     
        <div className="row">
          <div className="about-pharm col-lg-6 col-md-6">
            <div className="title">
           
              <img src="./images/pharmacy/logo.svg" alt="logo icon" />
              <h1>Pharmacy</h1>
            </div>
            <p className="text">
              Pharmacy app for helping the clients and patients to get their
              staff without get out of the house, all that with delivery and
              shipping to their houses
            </p>
            <p className="tryit">
             try it now
            </p>

            <ul className="go-app">
              <li>
                <a href="#">
                  <img src="./images/apps/app_store.svg" alt="Layer 2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                  src="./images/apps/google_play.svg"
                    alt="the_App_Store"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="./images/apps/microsoft.svg"
                    alt="microsoft"
                  />
                </a>
              </li>
            </ul>
           
          </div>
          <img src="./images/pharmacy/pharmacy.png" className="img-pharm col-lg-5 col-md-6 col-sm-9" data-aos="zoom-in" alt="Group"/>
        </div>
      
        </div>
  {/*end pharm */}
  <div className='testimonials2'>
        <h2> Screens</h2>
        <div className='btn-testimonials2'>
          <button ref={btn1} className='open' onClick={(e)=>{btn2.current.classList.remove("open");e.target.classList.add("open")}}>Mobile</button>
          <button ref={btn2} onClick={(e)=>{btn1.current.classList.remove("open");e.target.classList.add("open")}}>Desktop</button>

        </div>
        <Slider {...settings}>
          <div>
           <img src="./images/pharmacy/shap.svg" alt="logo icon" />
          </div>
          <div>
           <img src="./images/pharmacy/shap.svg" alt="logo icon" />
          </div>
          <div>
            <img src="./images/pharmacy/shap.svg" alt="logo icon" />
          </div>
          <div>
           <img src="./images/pharmacy/shap.svg" alt="logo icon" />
          </div>
          <div>
           <img src="./images/pharmacy/shap.svg" alt="logo icon" />
          </div>
          <div>
            <img src="./images/pharmacy/shap.svg" alt="logo icon" />
          </div>
        </Slider>
      </div>
        </Container>
      
    <div className="over">
      <div className="container">
      
          <h2>OverView</h2>
    
        <div className="over-about">
          <div className=' part part1'>   
           <h3>Scope</h3>
          <div className="one ">
            <div className="one1 page ">
              <img src='./images/overview/phone.svg' alt='phone'/>
              <h4>Mobile</h4>
              <p>our platform is mobile cuz user of the project</p>
            </div>
            <div className="one2 page">
            <img src='./images/overview/wep.svg' alt='phone'/>
              <h4>Admin Back Office</h4>
              <p>
              our platform is mobile cuz user of the project
              </p>
            </div>
          </div></div>
      
         <div className='part part2'>
         <div className="to">
            <div className="to1 ">
              <h3>Technology</h3>
              <div className='about-part page'>
               <div className='g-img'>
               <img  src='./images/overview/phone.svg' alt=''/>
               <img  src='./images/overview/wep.svg' alt=''/>
               </div>
              <h4>web, IOS, Andriod</h4>
              <div className='g-img f-img' >
              <img src='./images/technologies/next.svg' alt='TECH'/>
              <img src='./images/technologies/angularjs.svg' alt='TECH'/>
              <img src='./images/technologies/js.svg' alt='TECH'/>
              <img src='./images/technologies/ios.svg' alt='TECH'/>
              <img src='./images/technologies/android2.svg' alt='TECH'/>

             </div>
              </div>
         
            </div>
            <div className="to2 ">
              <h3>Team</h3>
              <div className='about-part page'>
               <div className='g-img'>
               <img  src='./images/overview/team.svg' alt=''/>
              
               </div>
              <h4>6 members</h4>
              <p>our platform is mobile cuz user of the project</p>
              </div>
             
            </div>
            <div className="to3 ">
              <h3>Duration</h3>
              <div className='about-part page'>
               <div className='g-img'>
               <img  src='./images/overview/time.svg' alt=''/>
              
               </div>
              <h4>3 months</h4>
              <p>our platform is mobile cuz user of the project</p>
              </div>
             
            </div>
          </div>
         </div>
         
        
         
        </div>
      </div>
    </div>
   
        <Container>
            <div className='look'>
                <h2>INTRESTED!</h2>
                <h3 className='h3-look'>Have a look on similar Projects</h3>
                <div className='all-portfolio'>
                {
data.map((data)=>{
    return(
   

    <div className="project col-lg-3 col-md-5 col-sm-5 col-12 aos-init" data-aos="fade-up" data-aos-delay="50" data-bs-toggle="modal" data-bs-target="#exampleModalLong" key={data.id}>
        <h3>{data.name.en}</h3>
        <p>{data.category.name.en}</p>
        <img src={data.main_image} alt="MS Player"/>

        </div>
  
  
)
})
                }
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Target_Project