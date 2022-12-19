import React from "react";
import {Container} from "react-bootstrap";
import Slider from "react-slick";

function Testimonials() {
    var settings = {
        className: "center",

        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2.8,
                    slidesToScroll: 2,


                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 2,


                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,


                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },

        ],
        nextArrow: (
            <div>
                <img src="./images/icons/arrow_right.svg" alt=""/>
            </div>
        ),
        prevArrow: (
            <div>
                <img src="./images/icons/arrow_left.svg" alt=""/>
            </div>
        ),
    };
    return (
        <div className="testimonials">
            <Container>
                <h2> Testimonials</h2>
                <Slider {...settings}>
                    <div className="card-tes">

                        <div className="card-info">
                            <img src="./images/testimonials/user.svg" alt=""/>
                            <div className="info-user">
                                <h3>Ahmed Muhammed</h3>
                                <h4>CEO Company</h4>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            hendrerit aliquet nunc nec semper. Curabitur interdum, odio ac
                            tempor auctor, massa lorem porta turpis, eu finibus leo neque a
                            massa.
                        </p>
                    </div>
                    <div className="card-tes">

                        <div className="card-info">
                            <img src="./images/testimonials/user.svg" alt=""/>
                            <div className="info-user">
                                <h3>Ahmed Muhammed</h3>
                                <h4>CEO Company</h4>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            hendrerit aliquet nunc nec semper. Curabitur interdum, odio ac
                            tempor auctor, massa lorem porta turpis, eu finibus leo neque a
                            massa.
                        </p>
                    </div>
                    <div className="card-tes">

                        <div className="card-info">
                            <img src="./images/testimonials/user.svg" alt=""/>
                            <div className="info-user">
                                <h3>Ahmed Muhammed</h3>
                                <h4>CEO Company</h4>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            hendrerit aliquet nunc nec semper. Curabitur interdum, odio ac
                            tempor auctor, massa lorem porta turpis, eu finibus leo neque a
                            massa.
                        </p>
                    </div>
                    <div className="card-tes">

                        <div className="card-info">
                            <img src="./images/testimonials/user.svg" alt=""/>
                            <div className="info-user">
                                <h3>Ahmed Muhammed</h3>
                                <h4>CEO Company</h4>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            hendrerit aliquet nunc nec semper. Curabitur interdum, odio ac
                            tempor auctor, massa lorem porta turpis, eu finibus leo neque a
                            massa.
                        </p>
                    </div>
                    <div className="card-tes">

                        <div className="card-info">
                            <img src="./images/testimonials/user.svg" alt=""/>
                            <div className="info-user">
                                <h3>Ahmed Muhammed</h3>
                                <h4>CEO Company</h4>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            hendrerit aliquet nunc nec semper. Curabitur interdum, odio ac
                            tempor auctor, massa lorem porta turpis, eu finibus leo neque a
                            massa.
                        </p>
                    </div>

                </Slider>
            </Container>
        </div>
    );
}

export default Testimonials;
