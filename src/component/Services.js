import React from "react";
import {Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Services() {
    const navigate = useNavigate()
    window.open= ()=>{
        window.scrollTo(250, 250)
    }   
    return (
        <div className="services" id="services">
            <Container>
                <h2>Our Services</h2>
                <div className="  all-services" onClick={()=>{navigate('/job_about')}}>
                    <div className=" one   part " onClick={()=>{navigate('/job_about')}}>
                        <img src="./images/services/web.png" alt=""/>
                        <h3>Web & Desktop <br/> Development</h3>
                        <p>
                            We design and create web that help reach business goals, amaze
                            customers and solve user problems. We will guide you through the
                            whole software development and graphic design process and help you
                            with further app development, both technology and business-wise.
                        </p>
                    </div>
                    <div className=" two part nocomplete" onClick={()=>{navigate('/job_about')}}>
                        <img src="./images/services/mobile.png" alt=""/>
                        <h3>Mobile Development</h3>
                        <p>
                            Great design not only looks good, but It’s also a key point of innovation for modern
                            companies, where user-friendliness and ease of services are major competitive business
                            advantages. This is why we treat product design and UX/UI as equally important.
                        </p>
                    </div>
                    <div className=" three  part nocomplete" onClick={()=>{navigate('/job_about')}}>
                        <img src="./images/services/ui_ux.png" alt=""/>
                        <h3>Product design <br/> and UX/UI</h3>
                        <p>
                            Great design not only looks good, but It’s also a key point of innovation for modern
                            companies, where user-friendliness and ease of services are major competitive business
                            advantages. This is why we treat product design and UX/UI as equally important.
                        </p>

                    </div>
                    <div className=" four part nocomplete" onClick={()=>{navigate('/job_about')}}>
                        <img src="./images/services/custom.png" alt=""/>
                        <h3>Custom Software<br/>Solutions </h3>
                        <p>
                            Great design not only looks good, but It’s also a key point of innovation for modern
                            companies, where user-friendliness and ease of services are major competitive business
                            advantages. This is why we treat product design and UX/UI as equally important.
                        </p>

                    </div>
                    <div className=" five  part " onClick={()=>{navigate('/job_about')}}>
                        <img src="./images/services/ecommerce.png" alt=""/>
                        <h3>E-commerce Solutions</h3>
                        <p>
                            You’ll get to select from an entire range of E-commerce packages, software, and shopping
                            cart systems ranging from mobile apps, websites, ERP, and Hr systems that provide you with
                            the best value for your investment.
                        </p>
                    </div>
                    <div className="sex   part nocomplete" onClick={()=>{navigate('/job_about')}}>
                        <img src="./images/services/outsource.png" alt=""/>
                        <h3>Support and<br/>Outsourcing Teams </h3>
                        <p>
                            Lower costs, faster time-to-market ratio, and better business results are among the biggest
                            advantages of using our software outsourcing services. Think of our teams as part of your
                            organization. Furthermore, we always select the team members according to your
                            industry.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Services;
