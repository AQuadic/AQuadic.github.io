import React from "react";
import {Container} from "react-bootstrap";

function Services() {
    return (
        <div className="services">
            <Container>
                <h2>Our Services</h2>
                <div className=" row all-services">
                    <div className="  col-lg-5 part ">
                        <img src="%PUBLIC_URL%/images/services/web.svg" alt=""/>
                        <h3>Web & Desktop <br/> Development</h3>
                        <p>
                            We design and create web that help reach business goals, amaze
                            customers and solve user problems. We will guide you through the
                            whole software development and graphic design process and help you
                            with further app development, both technology and business-wise.
                        </p>
                    </div>
                    <div className=" col-lg-5 part nocomplete">
                        <img src="%PUBLIC_URL%/images/services/mobile.svg" alt=""/>
                        <h3>Mobile Development</h3>
                        <p>
                            Great design not only looks good, but It’s also a key point of innovation for modern
                            companies, where user-friendliness and ease of services are major competitive business
                            advantages. This is why we treat product design and UX/UI as equally important.
                        </p>
                    </div>
                    <div className=" col-lg-5 part nocomplete">
                        <img src="%PUBLIC_URL%/images/services/ui_ux.svg" alt=""/>
                        <h3>Product design <br/> and UX/UI</h3>
                        <p>
                            Great design not only looks good, but It’s also a key point of innovation for modern
                            companies, where user-friendliness and ease of services are major competitive business
                            advantages. This is why we treat product design and UX/UI as equally important.
                        </p>

                    </div>
                    <div className=" col-lg-5 part nocomplete">
                        <img src="%PUBLIC_URL%/images/services/custom.svg" alt=""/>
                        <h3>Custom Software<br/>Solutions </h3>
                        <p>
                            Great design not only looks good, but It’s also a key point of innovation for modern
                            companies, where user-friendliness and ease of services are major competitive business
                            advantages. This is why we treat product design and UX/UI as equally important.
                        </p>

                    </div>
                    <div className="  col-lg-5 part ">
                        <img src="%PUBLIC_URL%/images/services/ecommerce.svg" alt=""/>
                        <h3>E-commerce Solutions</h3>
                        <p>
                            You’ll get to select from an entire range of E-commerce packages, software, and shopping
                            cart systems ranging from mobile apps, websites, ERP, and Hr systems that provide you with
                            the best value for your investment.
                        </p>
                    </div>
                    <div className=" col-lg-5 part nocomplete">
                        <img src="%PUBLIC_URL%/images/services/outsource.svg" alt=""/>
                        <h3>Support and<br/>Outsourcing Teams </h3>
                        <p>
                            Lower costs, faster time-to-market ratio, and better business results are among the biggest
                            advantages of using our software outsourcing services. Think of our teams as part of your
                            organization. Furthermore, we always select the team members according to your
                            industry. </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Services;
