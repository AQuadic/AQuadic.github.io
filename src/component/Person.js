import React from "react";
import {Container} from "react-bootstrap";
import ProjectModal from "./ProjectModal";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Person() {
    return (
        <div className="persone_info">
             <HelmetProvider>
<Helmet>
        
        <title>person</title>
        <link rel="canonical" href={`https://aquadic.com/person`}  />
        <meta
      name="description"
      content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
    />
      </Helmet>
            <Container>
                <div className="about">
                    <div className="person ">
                        <div className="person_img bink">
                            <img src="/images/team/person_img.svg" alt="person_img"/>
                        </div>
                        <div className="person_name">
                            <h3>Person Name</h3>
                            <p>Backend Developer</p>
                        </div>
                    </div>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit
                        aliquet nunc nec semper. Curabitur interdum, odio ac tempor auctor,
                        massa lorem porta turpis, eu finibus leo neque a massa. Ut interdum,
                        diam vitae vulputate accumsan, dui odio tempus tellus, ut maximus nisl
                        erat eget dolor. Integer et bibendum est. Vivamus nec sem ultricies,
                        imperdiet lectus sed, facilisis magna. Mauris lacus mi, tristique non
                        eros ut, bibendum sodales neque.{" "}
                    </h4>
                </div>
                <h2>Projects that have been worked on</h2>
                <div className='all-project row'>
                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="0"     data-bs-toggle="modal">
                        <h3>Oread</h3>
                        <p>Reading</p>
                        <img src='/images/projects/oread.svg' alt='Oread'/>
                    </div>

                    <div className='project col-lg-3 col-md-5 col-sm-5 col-12' data-aos="fade-up" data-aos-delay="50"                 data-bs-target="#exampleModalLong">
                        <h3>MS Player</h3>
                        <p>Media</p>
                        <img src='/images/projects/msplayer.svg' alt='MS Player'/>
                    </div>


                </div>
            </Container>
{/* <ProjectModal/> */}
</HelmetProvider>
        </div>
    );
}

export default Person;
