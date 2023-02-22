import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Career from "./component/Career";
import JobDetails from "./component/JobDetails";
import Hosting from "./component/Hosting";
import TimeModel from "./component/TimeModel";
import Team from "./component/Team";
import Persone from "./component/Persone";
import Portfolio from "./component/Portfolio";
import data from "./data/projects.json";
import ProjectDetails from "./component/ProjectDetails";
import ScrollToTop from "./component/ScrollToTop";
import PoTa from "./component/PoTa";
import HomeLay from "./component/HomeLay";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import JobAbout from "./component/JobAbout";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.language === "ar"
      ? (window.document.dir = "rtl")
      : (window.document.dir = "ltr");
  }, [i18n.language]);

  AOS.init();

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLay />}>
            <Route index element={<Home />} />
            <Route path="career" element={<Career />} />
            <Route path="job" element={<JobDetails />} />
            <Route path="hosting" element={<Hosting />} />
            <Route path="time_model" element={<TimeModel />} />
            <Route path="team" element={<Team />} />
            <Route path="person" element={<Persone />} />
            <Route path="portfolio" element={<PoTa />}>
              <Route index element={<Portfolio data={data} />} />
              <Route path=":id" element={<ProjectDetails data={data} />} />
            </Route>
            <Route path="service/:id" element={<JobAbout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
