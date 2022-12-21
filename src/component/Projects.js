import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <Container>
        <div className="head">
          <h2>Our Latest Creative Projects</h2>
          <Link to="/more">
            <p>See All Protfolio</p>
            <img src="./images/icons/see_all.svg" alt="" />
          </Link>
        </div>

        <div className="all-project row">
          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="0"
          
          >
            <h3>Oread</h3>
            <p>Reading</p>
            <img src="./images/projects/oread.svg" alt="Oread" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h3>MS Player</h3>
            <p>Media</p>
            <img src="./images/projects/msplayer.svg" alt="MS Player" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Optimalimo</h3>
            <p>Transportation, Booking</p>
            <img src="./images/projects/optimalimo.svg" alt="Optimalimo" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3>Lokta</h3>
            <p>Ecommerce</p>
            <img src="https://i.ibb.co/wMyrXth/lokta.png" alt="Lokta" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Hakam Motors</h3>
            <p>Ecommerce</p>
            <img src="https://i.ibb.co/NNVZkMZ/hakam.png" alt="Hakam Motors" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="250"
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
          >
            <h3>Bookly</h3>
            <p>Booking</p>
            <img src="https://i.ibb.co/hWMj9J1/bookly.png" alt="" />
          </div>

          <div
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <h3>TrackCo</h3>
            <p>Transportations</p>
            <img src="https://i.ibb.co/CsD0t34/tracko.png" alt="" />
          </div>

          <button
            className="project col-lg-3 col-md-5 col-sm-5 col-12"
            data-aos="fade-up"
            data-aos-delay="400"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            <h3>Quraan</h3>
            <p>Religion, Books</p>
            <img src="https://i.ibb.co/kgRBNb1/quraan.png" alt="" />
          </button>
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
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                body
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
