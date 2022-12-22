import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "./Message";
function Team() {
    const navigate = useNavigate()
  return (
    <div className="team">
      <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
        <img src="./images/Team/team.svg" alt="hosting" />
       <div className="about_img_team">
       <h2>Our Peaple</h2>
       <p>This is our team, a lot of smiling happy people who work hard to empower your Project.</p>
       </div>
      </div>
      <Container>
        <div className="part  part1">
          <div className="des_team">
            <h2>Our leadership team</h2>
            <p>
              With over 100 years of combined experience, we've got a
              well-seasoned team at the helm.
            </p>
          </div>
          <div className="about_team ">
            <div className="person " onClick={()=> navigate('/person')}>
              <div className="person_img bink">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Backend Developer</p>
              </div>
            </div>
            <div className="person " onClick={()=> navigate('/person')}>
              <div className="person_img blue">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>UI UX Designer</p>
              </div>
            </div>
            <div className="person " onClick={()=> navigate('/person')}>
              <div className="person_img orange">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="part  part2">
          <div className="des_team">
            <h2>Our Creative team</h2>
            <p>These are the people that make the magic happen.</p>
          </div>
          <div className="about_team ">
            <div className="person "  onClick={()=> navigate('/person')}>
              <div className="person_img bink">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Backend Developer</p>
              </div>
            </div>
            <div className="person " onClick={()=> navigate('/person')}>
              <div className="person_img blue">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>UI UX Designer</p>
              </div>
            </div>
            <div className="person " onClick={()=> navigate('/person')}>
              <div className="person_img orange">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="person " onClick={()=> navigate('/person')}>
              <div className="person_img bink">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="person " onClick={()=> navigate('/person')}>
              <div className="person_img blue">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="person " onClick={()=> navigate('/person')}>
              <div className="person_img orange">
                <img src="./images/team/person_img.svg" alt="person_img" />
              </div>
              <div className="person_name">
                <h3>Person Name</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Message/>
    </div>
  );
}

export default Team;
