import React from "react";
import { Container } from "react-bootstrap";
import Message from "./Message";

function Time_Model() {
  return (
    <div className="time">
      <div className="imageheader " data-aos="zoom-in-up" data-aos-delay="50">
        <img src="./images/Time_Model/Time_model.svg" alt="hosting" />
        <h2>
        Top Product Pricing Strategies & Competitive Pricing Methods
        </h2>
      </div>
      <Container  className="row">
        <div className="col-lg-3 col part_time">
          <h2>Fixed Price Model</h2>
          <img src="./images/Time_Model/price_model.svg" />
          <p>
            Fixed Price model is suitable for projects with well-defined
            requirements and schedules. When your need is clearly specified in
            sufficient details, AQuadic estimates the project scope and
            complexity and provides a project delivery schedule along with the
            fixed price for the complete product development. Under this
            business model, AQuadic ensures quality delivery of the final
            product within a pre-scheduled timeframe, and the customer pays a
            mutually agreed fixed price for the project implementation. The
            primary advantage of the Fixed Price model consists in allowing the
            customer to determine exactly the project budget in advance.
            However, in comparison with the Time & Materials model, Fixed Price
            contracts tend to be less flexible for managing changes and
            additional features requests. Any requirement changes or new feature
            requests occurring during the project implementation process will
            cause a re-negotiation of the delivery schedule and price.
          </p>
        </div>
        <div className="col-lg-3 col part_time">
          <h2>Time Model</h2>
          <img src="./images/Time_Model/time_model2.svg" />
          <p>
          AQuadic Time model is the perfect choice if your tasks are not continuous, you don’t want to hire a full-time employee to work for just a week each month. AQuadic offers you a dedicated employee to work for your project and you just have to pay for the Hours Worked Hourly Rate.
Here are some benefits you can gain from AQyadic Time & Material Model:
High degree of flexibility in changing or modifying the project’s requirements or even the project’s scope as a whole.
No need to pay a pre-prepared bill full of wages; instead, the customer just pays only for time worked.
The possibility of assigning up to 2 resources in parallel for the same task.
Easy communication via extended communication channels during the working hours.
Access to issue tracking tool.
Access to Project Management tool.
Periodical Timesheet and Work Progress Reports.
          </p>
        </div>
        <div className="col-lg-3 col part_time">
          <h2>Off-shore Dedicated Teams Model</h2>
          <img src="./images/Time_Model/team_model.svg" />
          <p>
          Assigning the task of building your own virtual team using one of AQuadic professional teams that will be dedicated only for your projects (either to develop new solutions or to make changes to an existing one) in a specified time period helps you to avoid a headache and risks of forming a Development Unit on your site and getting trapped in the infinite loop of employees’ turnover and increasing operation costs which would affect directly the cost, quality and time taken to have your project done.
Here are some benefits you can gain from AQuadic offshore dedicated teams:
Minimizing the cost of your projects
Preventing the risk of fast employees turnover
Stand-by backup resources
Professional project management
Easy communication via extended communication channels during the working hours
Access to issue tracking tool
Access to project management tool
Weekly timesheet and work progress reports
          </p>
        </div>
      </Container>
      <Message/>
    </div>
  );
}

export default Time_Model;
