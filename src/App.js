import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/home/Home";
import Career from "./component/career/Career";
import CareerDetails from "./component/career/CareerDetails";
import Hosting from "./component/Hosting";
import Pricing from "./component/Pricing";
import Team from "./component/team/Team";
import Person from "./component/team/Person";
import Portfolio from "./component/portfolio/Portfolio";
import data from "./data/projects.json";
import ProjectDetails from "./component/portfolio/ProjectDetails";
import ScrollToTop from "./component/ScrollToTop";
import HomeLayout from "./component/layout/HomeLayout";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import ServiceDetails from "./component/service/ServiceDetails";

function App() {
    const {i18n} = useTranslation();
    useEffect(() => {
        window.document.dir = i18n.dir();
    }, [i18n.resolvedLanguage]);

    AOS.init();

    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<HomeLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="career">
                            <Route index element={<Career/>}/>
                            <Route path=":id" element={<CareerDetails/>}/>
                        </Route>
                        <Route path="hosting" element={<Hosting/>}/>
                        <Route path="time_model" element={<Pricing/>}/>
                        <Route path="team" >
                        <Route index element={<Team/>}/>
                        <Route path=":id" element={<Person/>}/>
                        </Route>
                   
                        <Route path="portfolio">
                            <Route index element={<Portfolio data={data}/>}/>
                            <Route path=":id" element={<ProjectDetails data={data}/>}/>
                        </Route>
                        <Route path="service/:id" element={<ServiceDetails/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
