import React from "react";
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useTranslation } from 'react-i18next';
import testimonials from '../data/testimonials.json'
function Testimonials() {
    const { t ,i18n} = useTranslation();

    var settings = {
        className: "center",
        prevArrow:
            <div>
                <img src="/images/icons/arrow_left.svg" alt=""/>
            </div>,
        nextArrow:
            <div>
                <img src="/images/icons/arrow_right.svg" alt=""/>
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
                <h2> {t("home.testimonials.title")}</h2>
                <Slider {...settings}>
                    {
testimonials.map((item)=> 

    <div className="card-tes">
    <div className="card-info">
        <img
            src={item.image}
            alt={item.name[i18n.language]}/>
        <div className="info-user">
            <h3>{item.name[i18n.language]}</h3>
            <h4>{item.position[i18n.language]}</h4>
        </div>
    </div>
    <p>
        <ReactReadMoreReadLess
            charLimit={196}
            readMoreText={"See More "}
            readLessText={"Read less ▲"}
        >
           {item.description[i18n.language]}
        </ReactReadMoreReadLess>

    </p>
</div>
)
                    }
                  
                </Slider>
            </Container>
        </div>
    );
}

export default Testimonials;
