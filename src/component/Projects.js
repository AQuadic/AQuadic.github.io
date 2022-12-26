import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Projects() {
    return (
        <div className="projects">
            <Container>
                <div className="head">
                    <h2>Our Latest Creative Projects</h2>
                    <Link to="/more">
                        <p>See All Protfolio</p>
                        <img src="./images/icons/see_all.svg" alt=""/>
                    </Link>
                </div>

                <div className="all-project row">
                    <div
                        className="project col-lg-3 col-md-5 col-sm-5 col-12"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalLong"
                    >
                        <h3>Oread</h3>
                        <p>Reading</p>
                        <img src="./images/projects/oread.svg" alt="Oread"/>
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
                        <img src="./images/projects/msplayer.svg" alt="MS Player"/>
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
                        <img src="./images/projects/optimalimo.svg" alt="Optimalimo"/>
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
                        <img src="https://i.ibb.co/wMyrXth/lokta.png" alt="Lokta"/>
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
                        <img src="https://i.ibb.co/NNVZkMZ/hakam.png" alt="Hakam Motors"/>
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
                        data-bs-target="#exampleModalLong">
                        <h3>Bookly</h3>
                        <p>Booking</p>
                        <img src="https://i.ibb.co/hWMj9J1/bookly.png" alt=""/>
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
                        <img src="https://i.ibb.co/CsD0t34/tracko.png" alt=""/>
                    </div>

                    <div
                        className="project col-lg-3 col-md-5 col-sm-5 col-12"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalLong"
                    >
                        <h3>Quraan</h3>
                        <p>Religion, Books</p>
                        <img src="https://i.ibb.co/kgRBNb1/quraan.png" alt=""/>
                    </div>
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
                                <img src="./images/projects/oread.svg" alt=""/>
                                <img className="back_img" src="./images/projects/oread.svg" alt=""/>

                            </div>
                            <div className="modal_title">
                                <h2>Optima limo</h2>
                                <p>
                                    Optima Limo is specialized in car rental with driver service
                                    We Are Dynamic, Professional company that is very attentive to
                                    privacy, courtesy, reliability and transparency. We offer
                                    “passenger Transportation services”. From individual to
                                    delegations for companies, professionals and private citizens,
                                    with high-Quality professional services and vehicles{" "}

                                </p>
                                <div className="modal_app">
                                    <img src="./images/apps/app_store.svg" alt=""/>
                                    <img src="./images/apps/google_play.svg" alt=""/>
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
