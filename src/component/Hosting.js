import React from "react";
import { Container } from "react-bootstrap";
import hosting from "../data/hosting.json";
function Hosting() {
  console.log(hosting);
  return (
    <div className="hosting">
      <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
        <img src="/images/hosting/hosting.svg" alt="hosting" />
        <h2>
          Best Web Hosting for Small Businesses Find the right service for your
          business
        </h2>
      </div>
      <Container>
     

        {/* when hosting more then one item run this */}
        {/* {
    hosting ?
hosting.map((item)=>{
<div className="part_host" key={item.id}>
                    <div className="about_host">
                        <img
                            src={item.image}
                            alt=""/>
                        <div className="info_host">
                            <h2>
                               {item.name.en}
                            </h2>
                            <p>{item.description.en}</p>
                        </div>
                    </div>
                    <a href={item.url}>
                        <button className="btn-page">Visit Site</button>
                    </a>
                </div>
})
:<></>
                
            } */}
        <div className="part_host" key={hosting[0].id}>
          <div className="about_host">
            <img src={hosting[0].image} alt="" />
            <div className="info_host">
              <h2>{hosting[0].name.en}</h2>
              <p>{hosting[0].description.en}</p>
            </div>
          </div>
          <a target={"_blank"} href={hosting[0].url}>
            <button className="btn-page">Visit Site</button>
          </a>
        </div>
      
      </Container>
    </div>
  );
}

export default Hosting;
