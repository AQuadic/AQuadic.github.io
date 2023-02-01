import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {counteraction} from "../data/data";
function Projects(props) {
const {targetProjecr} = counteraction;
const dispatch = useDispatch();
  const checklang =window.document.dir;
  const qi = useSelector((state)=>state.dir.value)
  const project = useSelector((state)=>state.dir.project)
  console.log(project)
useEffect(()=>{

  setlang(qi.toLowerCase())
}
,[qi])
  
  const all_data = props.all_data;
  console.log(all_data)
const [currentProject ,setcurrentProject]=useState(all_data[0])


const [lang ,setlang]=useState()

const [imageProject ,setimageProject]=useState("")

console.log(currentProject)
console.log(all_data[0].name[lang])
  return (
    <div className="projects">
      <Container>
        <div className="head">
          <h2>Our Latest Creative Projects</h2>
          <Link to="/portfolio">
            <p>See All Protfolio</p>
            <img src="./images/icons/see_all.svg" alt="" />
          </ Link>
        </div>

        <div className="all-project row">
          {
            all_data.map((data)=>{return(
              
               <div
               key={data.id}
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          onClick={()=>{setcurrentProject(data);dispatch(targetProjecr(data))}}
          
          >
            <h3>{data.name[lang]}</h3>
            <p>{data.category.name.en}</p>
            <img src={data.main_image} alt="Oread" />
          </div>
             
            )})
          }
          {/* <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3>Oread</h3>
            <p>Reading</p>
            <img src="./images/projects/oread.svg" alt="Oread" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="50"
             data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3>MS Player</h3>
            <p>Media</p>
            <img src="./images/projects/msplayer.svg" alt="MS Player" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="100"
             data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3>Optimalimo</h3>
            <p>Transportation, Booking</p>
            <img src="./images/projects/optimalimo.svg" alt="Optimalimo" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="150"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3>Lokta</h3>
            <p>Ecommerce</p>
            <img src="https://i.ibb.co/wMyrXth/lokta.png" alt="Lokta" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3>Hakam Motors</h3>
            <p>Ecommerce</p>
            <img src="https://i.ibb.co/NNVZkMZ/hakam.png" alt="Hakam Motors" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="250"
             data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3>Marvelous Emotion</h3>
            <p>Ecommerce</p>
            <img
              src="https://i.ibb.co/NssmzqT/marvelous.png"
              alt="Marvelous Emotion"
            />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"          >
            <h3>Bookly</h3>
            <p>Booking</p>
            <img src="https://i.ibb.co/hWMj9J1/bookly.png" alt="" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="350"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3>TrackCo</h3>
            <p>Transportations</p>
            <img src="https://i.ibb.co/CsD0t34/tracko.png" alt="" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="400"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3 >Quraan</h3>
            <p>Religion, Books</p>
            <img src="https://i.ibb.co/kgRBNb1/quraan.png" alt="" />
          </div>
        </div> */}
         </div>
      </Container>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  aria-hidden="true"
                  src="./images/icons/model_x.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="modal-body">
              <div className="modal_img">
                <img src={currentProject.main_image} alt="" />
                <img className="back_img" src={currentProject.background_image} alt="" />

              </div>
              <div className="modal_title">
                <h2>{currentProject.name[lang]}</h2>
                <p>
                 {currentProject.description[lang]}
                  
                </p>
                <div  data-bs-dismiss="modal" className=" close view">
                <Link  to={`portfolio/${currentProject.id}`} className=" view"
              
               
                >
            <p >{currentProject.id}</p>
            <img src="./images/icons/see_all.svg" alt="" />
          </ Link>
                </div>
               
                <div className="modal_app">
                {
                    currentProject.links.app_store ?    <a href={  currentProject.links.app_store}>  <img src="./images/apps/app_store.svg" alt="" /></a>:null
                  }
               
                {
                    currentProject.links.play_store ?   <a href={currentProject.links.play_store}><img src="./images/apps/google_play.svg" alt="" /></a> :null
                  }
                   {
                    currentProject.links.ms_store ?     <a href={currentProject.links.ms_store}><img src="/images/apps/microsoft.svg" alt="" /></a> :null
                  }
                   {
                    currentProject.links.behance ?     <a href={  currentProject.links.behance}><img src="/images/apps/behance.svg" alt="" /></a> :null
                  }
                   {
                    currentProject.links.presentation ?    <a href={currentProject.links.presentation}><img src="/images/apps/presentation.svg" alt="" /></a> :null
                  }
                 {
                    currentProject.links.website ?    <a href={currentProject.links.website }><img src="/images/apps/website.svg" alt="" /></a>:null
                  }
               
              
              
               
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Projects;
