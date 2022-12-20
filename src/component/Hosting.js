import React from "react";
import { Container } from "react-bootstrap";

function Hosting() {
  return (
    <div className="hosting">
      <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
        <img src="./images/hosting/hosting.svg" alt="hosting" />
        <h2>
          Best Web Hosting for Small Businesses Find the right service for your
          business
        </h2>
      </div>
      <Container>
        <div className="part_host">
          <div className="about_host">
            <img src="./images/hosting/bluehost.svg" alt="" />
            <div className="info_host">
              <h2>
                Bluehost -Reliable hosting for small businesses with a dvanced
                security add-ons
              </h2>
              <ul>
                <li>Powers 2M+ websites worldwide</li>
                <li>Automatic WordPress installation</li>
                <li>Free domain & website migration</li>
                <li>Unmetered bandwidth</li>
              </ul>
            </div>
          </div>
          <button className="btn-page">Visit Site</button>
        </div>
        <div className="part_host">
          <div className="about_host">
            <img src="./images/hosting/godaddy.svg" alt="" />
            <div className="info_host">
              <h2>
                GoDaddy -Complete hosting solutions for any website and business
              </h2>
              <ul>
                <li> One-click installation of 150+ apps</li>
                <li>Guaranteed 99.9% uptime</li>
                <li>Free domain with annual plan</li>
              </ul>
            </div>
          </div>
          <button className="btn-page">Visit Site</button>
        </div>
      </Container>
    </div>
  );
}

export default Hosting;
