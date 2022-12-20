import React from "react";
import {Container} from "react-bootstrap";
import Slider from "react-slick";

function Testimonials() {
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
       
        
    };
    return (
        <div className="testimonials">
            <Container>
                <h2> Testimonials</h2>
                <Slider {...settings}>
                    <div className="card-tes">
                        <div className="card-info">
                            <img
                                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a2a487586c61ba3ee34eb753f0616440-1619433591788/3cc93c37-650f-444f-afef-2f3733d32d55.jfif"
                                alt=""/>
                            <div className="info-user">
                                <h3>Gino Furcy</h3>
                                <h4>Business Developer | Tikado</h4>
                            </div>
                        </div>
                        <p>
                            I worked with AQuadic company on our mobile application project and honestly he is
                            very talented in his field of work. He is an expert mobile developer using flutter and knows
                            his way around firebase very well. He accepts challenges easily and quickly shows that he is
                            up to the task. Very agile, he copes with changes in project scope quite well. He has a Very
                            quick turnaround time and is Happy to share his experience and knowledge with his customers.
                            With him on my team, I’m assured that the project will be completed successfully.
                        </p>
                    </div>

                    <div className="card-tes">
                        <div className="card-info">
                            <img src="./images/testimonials/user.svg" alt=""/>
                            <div className="info-user">
                                <h3>Bader</h3>
                                <h4>CEO | Coifast</h4>
                            </div>
                        </div>
                        <p>
                            AQuadic provided a great service for the app development. Very
                            responsive and providing great feedback. 100% recommend him, very professional!
                        </p>
                    </div>

                    <div className="card-tes">
                        <div className="card-info">
                            <img
                                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ff2b4d69f72bbe9fb684950120230caf-1658659897675/24baef5a-3404-429e-90c3-57ba81c4f91f.jpg"
                                alt=""/>
                            <div className="info-user">
                                <h3>Specialman</h3>
                                <h4>CEO Company</h4>
                            </div>
                        </div>
                        <p>
                            Nice work, will always work with him
                        </p>
                    </div>

                    <div className="card-tes">
                        <div className="card-info">
                            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1d7273faeb9c7c9398706bad9b5b60ba-891545111593544541.4100041/0C1497CF-E72D-490C-9C59-5E3E6EFB827B" alt=""/>
                            <div className="info-user">
                                <h3>Whitney Mcclendo</h3>
                                <h4>CEO Company</h4>
                            </div>
                        </div>
                        <p>
                            He completed our work 3 days early!! This is the third time we have worked with AQuadic,
                            but it's definitely not the last. He is an excellent communicator and really is an essential
                            part of taking your job to the next level. It was a pleasure to work with him! He never
                            missed a beat. Thank so so much.
                        </p>
                    </div>

                    <div className="card-tes">
                        <div className="card-info">
                            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/050370886c3ff7344f51676dd479a9da-1530970129204/e7140f76-6c9b-4bda-829b-d8a5b6f729a2.jpg" alt=""/>
                            <div className="info-user">
                                <h3>Ahmed Muhammed</h3>
                                <h4>CEO Company</h4>
                            </div>
                        </div>
                        <p>
                            I was impressed that AQuadic understood my problem immediately and that's why I agreed to
                            work with him. He also agreed to help me with some little tasks during the app development
                            in flutter. His skills and communications are THE BEST. I am very satisfied and looking
                            forward to work with him in the future.
                        </p>
                    </div>
                </Slider>
            </Container>
        </div>
    );
}

export default Testimonials;
