import React, {useEffect, useRef} from "react";
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import projects from '../data/projects.json'
function Odometer() {
    const { t, i18n } = useTranslation();
String(projects.length).slice(1)
    const ref = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const refall = useRef();
    useEffect(() => {


        window.onscroll = () => {
            if (window.location.pathname === "/") {
                const y = window.innerWidth > 992 ? 10 : 6;

                if (window.scrollY >= (refall.current.offsetTop - window.outerHeight + 350)) {
                    ref.current.style.transform = `translateY(-${ref.current.clientHeight - y}px)`;
                    ref2.current.style.transform = `translateY(-${ref.current.clientHeight - y}px)`;
                    ref3.current.style.transform = `translateY(-${ref.current.clientHeight - y}px)`;

                } else {
                    ref.current.style.transform = "translateY(0px)";
                    ref2.current.style.transform = "translateY(0px)";
                    ref3.current.style.transform = "translateY(0px)";
                }
            } else {
                return null
            }


        }


    }, [])


    return (
        <div className="allcounter" ref={refall}>

            <Container>
                <h2>{t("home.numbers.title")}</h2>

                <div className="counter">
                    <div className="num1 num">

                        <div className="allnum">
                        {String(projects.length).slice(0,1)}
                            <div className="numup" ref={ref}>
                                <span> {+String(projects.length).slice(1)-1}</span>
                                <span> {String(projects.length).slice(1)}</span>
                            </div>
                        </div>
                        <h3>{t("home.numbers.projects")}</h3>
                    </div>
                    <div className="num2 num">
                        <div className="allnum">
                            3
                            <div className="numup" ref={ref2}>
                                <span>0</span>
                                <span>1</span>
                            </div>

                        </div>

                        <h3>{t("home.numbers.clients")}</h3>
                    </div>
                    <div className="num3 num">
                        <div className="allnum">

                            <div className="numup" ref={ref3}>
                                <span>5</span>
                                <span>6</span>
                            </div>
                        </div>
                        <h3>{t("home.numbers.countries")}</h3>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Odometer;
