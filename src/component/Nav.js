import React from 'react'
import { Button, Container, Form, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

import { Link, NavLink } from 'react-router-dom';
function Nav() {
 
  return (
  <Container className='con'>
    <nav className="navbar navbar-expand-lg navbar-light ">
        
    <Link className="navbar-brand" to="/">
      <img src='./images/image 1.svg' alt='navbar-brand'/>
    </Link>
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Company
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="#">About US</Link></li>
            <li><Link class="dropdown-item" to="#">Hosting Sites</Link></li>
            <li><Link class="dropdown-item" to="#">Types of works</Link></li>
            <li><Link class="dropdown-item" to="#">Payment Method</Link></li>

          </ul>
        </li>
        <li className="nav-item active" data-aos="fade-right"   data-aos-delay="00">
          <NavLink className="nav-link" to="/" >Home </NavLink>
        </li>
        <li className="nav-item" data-aos="fade-left"  data-aos-delay="50">
          <NavLink className="nav-link" to="/Linkbout"  >About Us</NavLink>
        </li>
        <li className="nav-item" data-aos="fade-right"  data-aos-delay="100">
          <NavLink className="nav-link" to="/services" >Services</NavLink>
        </li>
        <li className="nav-item" data-aos="fade-left"  data-aos-delay="150">
          <NavLink className="nav-link " to="/career" >Career</NavLink>
        </li>
        <li className="nav-item" data-aos="fade-left"  data-aos-delay="150">
          <NavLink className="nav-link " to="/contact" >Team</NavLink>
        </li>
        <li className="nav-item" data-aos="fade-left"  data-aos-delay="150">
          <NavLink className="nav-link " to="/contact" >Contact Us</NavLink>
        </li>
      </ul>
      
    </div>
    <button className='lang navbar-collapse ' id='navbarNav'> <img src='./images/lang.svg' alt=''/> English</button>
  </nav>
  </Container>
  )
}

export default Nav